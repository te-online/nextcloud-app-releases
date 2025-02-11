<?php

namespace OCA\TimeManager\Db;

use OCA\TimeManager\Helper\ISODate;
use OCP\AppFramework\Db\QBMapper;
use OCP\IDBConnection;

/**
 * Class ItemMapper
 *
 * @package OCA\TimeManager\Db
 * @method Client insert(Client $entity)
 */
class ObjectMapper extends QBMapper {
	protected $userId;
	protected $db;
	protected $commitMapper;

	public function __construct(IDBConnection $db, CommitMapper $commitMapper, $dbname) {
		$this->db = $db;
		$this->commitMapper = $commitMapper;
		parent::__construct($db, $dbname);
	}

	function setCurrentUser($userId) {
		$this->userId = $userId;
		$this->commitMapper->setCurrentUser($this->userId);
	}

	function getActiveObjects($orderby = "created", $sort = "ASC"): array {
		$sql = $this->db->getQueryBuilder();
		$sql
			->select("*")
			->from($this->tableName)
			->where("`user_id` = ?")
			->andWhere("`status` != ?")
			->orderBy(\strtolower($orderby), $sort);

		$sql->setParameters([$this->userId, "deleted"]);

		return $this->findEntities($sql);
	}

	/**
	 * Fetch all items that are associated to the current user
	 * with a given attribute-value-combination and not deleted
	 *
	 * @param string $attr the attribute name
	 * @param string $value the attribute value
	 * @return Object[] list if matching items
	 */
	function getActiveObjectsByAttributeValue(string $attr, string $value, $orderby = "created", $shared = false, $sort = "ASC"): array {
		$sql = $this->db->getQueryBuilder();
		if ($shared && strpos($this->tableName, "_client") > -1) {
			$sql
				->selectDistinct("client.*")
				->from($this->tableName, "client")
				->leftJoin("client", "*PREFIX*timemanager_share", "share", "client.`uuid` = share.`object_uuid`")
				->leftJoin("share", "*PREFIX*group_user", "group_user", "share.recipient_id = group_user.gid");

			$expr = $sql->expr()->orX(
				"share.`recipient_id` = :userid AND share.`recipient_type` = 'user'",
				"group_user.`uid` = :userid AND share.`recipient_type` = 'group'",
				"client.`user_id` = :userid",
			);

			$sql
				->where($expr)
				->andWhere("client.`status` != :status")
				->andWhere("client.`$attr` = :attr")
				->orderBy(\strtolower($orderby), $sort);

			$sql->setParameters(["userid" => $this->userId, "status" => "deleted", "attr" => $value]);
		} elseif ($shared && strpos($this->tableName, "_project") > -1) {
			$sql
				->selectDistinct("project.*")
				->from($this->tableName, "project")
				->leftJoin(
					"project",
					"*PREFIX*timemanager_share",
					"share",
					"project.`client_uuid` = share.`object_uuid` AND share.`author_user_id` != :userid"
				)
				->leftJoin("share", "*PREFIX*group_user", "group_user", "share.recipient_id = group_user.gid");

			$expr = $sql->expr()->orX(
				"share.`recipient_id` = :userid AND share.`recipient_type` = 'user'",
				"group_user.`uid` = :userid AND share.`recipient_type` = 'group'",
				"project.`user_id` = :userid"
			);

			$sql
				->where($expr)
				->andWhere("project.`status` != :status")
				->andWhere("project.`$attr` = :attr")
				->orderBy(\strtolower($orderby), $sort);

			$sql->setParameters(["userid" => $this->userId, "status" => "deleted", "attr" => $value]);
		} elseif ($shared && strpos($this->tableName, "_task") > -1) {
			$sql
				->selectDistinct("task.*")
				->from($this->tableName, "task")
				->innerJoin("task", "*PREFIX*timemanager_project", "project", "task.`project_uuid` = project.`uuid`")
				->leftJoin(
					"project",
					"*PREFIX*timemanager_share",
					"share",
					"project.`client_uuid` = share.`object_uuid` AND share.`author_user_id` != :userid"
				)
				->leftJoin("share", "*PREFIX*group_user", "group_user", "share.recipient_id = group_user.gid");

			$expr = $sql->expr()->orX(
				"share.`recipient_id` = :userid AND share.`recipient_type` = 'user'",
				"group_user.`uid` = :userid AND share.`recipient_type` = 'group'",
				"task.`user_id` = :userid"
			);

			$sql
				->where($expr)
				->andWhere("task.`status` != :status")
				->andWhere("task.`$attr` = :attr")
				->orderBy(\strtolower($orderby), $sort);

			$sql->setParameters(["userid" => $this->userId, "status" => "deleted", "attr" => $value]);
		} elseif ($shared && strpos($this->tableName, "_time") > -1) {
			$sql
				->selectDistinct("time.*")
				->from($this->tableName, "time")
				->innerJoin("time", "*PREFIX*timemanager_task", "task", "time.`task_uuid` = task.`uuid`")
				->innerJoin("task", "*PREFIX*timemanager_project", "project", "task.`project_uuid` = project.`uuid`")
				->leftJoin(
					"project",
					"*PREFIX*timemanager_share",
					"share",
					"project.`client_uuid` = share.`object_uuid` AND share.`author_user_id` = :userid"
				);

			$expr = $sql->expr()->orX("share.`author_user_id` = :userid", "time.`user_id` = :userid");

			$sql
				->where($expr)
				->andWhere("time.`status` != :status")
				->andWhere("time.`$attr` = :attr")
				->orderBy(\strtolower($orderby), $sort);

			$sql->setParameters(["userid" => $this->userId, "status" => "deleted", "attr" => $value]);
		} else {
			$sql = $this->db->getQueryBuilder();
			$sql
				->select("*")
				->from($this->tableName)
				->where("`user_id` = ?")
				->andWhere("`status` != ?")
				->andWhere("`$attr` = ?")
				->orderBy(\strtolower($orderby), $sort);

			$sql->setParameters([$this->userId, "deleted", $value]);
		}

		return $this->findEntities($sql);
	}

	/**
	 * Fetch all items that are associated to the current user
	 * within a given timerange, not deleted and with applied filters
	 *
	 * @param string $date_start the range start
	 * @param string $date_end the range end
	 * @param ?string $status the status
	 * @return Object[] list if matching items
	 */
	function getActiveObjectsByDateRangeAndFilters(
		string $date_start,
		string $date_end,
		string $status = null,
		array $filter_tasks = [],
		string $orderby = "start",
		$shared = false,
		string $timezone = "UTC"
	): array {
		$date_timezone = new \DateTimeZone($timezone);

		$start_is_day_only = strlen($date_start) <= 10;
		if ($start_is_day_only) {
			// Day-only dates need a time to convert between timezones, set start-of-day as the time
			$date_start = $date_start . " 00:00:00";
		}
		$date_start_instance = \DateTime::createFromFormat("Y-m-d H:i:s", $date_start, $date_timezone);
		$date_start_instance->setTimezone(new \DateTimeZone("UTC"));

		$end_is_day_only = strlen($date_end) <= 10;
		if ($end_is_day_only) {
			// Day-only dates need a time to convert between timezones, set end-of-day as the time
			$date_end = $date_end . " 23:59:59";
		}
		$date_end_instance = \DateTime::createFromFormat("Y-m-d H:i:s", $date_end, $date_timezone);
		$date_end_instance->setTimezone(new \DateTimeZone("UTC"));

		$params = [
			"userid" => $this->userId,
			"deleted" => "deleted",
			"date_start" => ISODate::formatISO($date_start_instance),
			"date_end" => ISODate::formatISO($date_end_instance),
		];

		$sql = $this->db->getQueryBuilder();

		if ($shared) {
			$sql
				->selectDistinct("current.*")
				->from($this->tableName, "current")
				->innerJoin("current", "*PREFIX*timemanager_task", "task", "current.`task_uuid` = task.`uuid`")
				->innerJoin("task", "*PREFIX*timemanager_project", "project", "task.`project_uuid` = project.`uuid`")
				->leftJoin(
					"project",
					"*PREFIX*timemanager_share",
					"share",
					"project.`client_uuid` = share.`object_uuid` AND share.`author_user_id` = :userid"
				)
				->leftJoin("share", "*PREFIX*group_user", "group_user", "share.recipient_id = group_user.gid");

			$expr = $sql->expr()->orX("share.`author_user_id` = :userid", "current.`user_id` = :userid");

			$sql
				->where($expr)
				->andWhere("current.`status` != :deleted")
				->andWhere("current.`start` >= :date_start")
				->andWhere("current.`start` <= :date_end");
		} else {
			$sql
				->select("*")
				->from($this->tableName)
				->where("`user_id` = :userid")
				->andWhere("`status` != :deleted")
				->andWhere("start >= :date_start")
				->andWhere("start <= :date_end");
		}

		if (isset($status) && $status) {
			if ($status === "paid") {
				$sql->andWhere("LOWER(`payment_status`) = :status");
				$params["status"] = strtolower($status);
			} else {
				$expr = $sql->expr()->orX("`payment_status` IS NULL", "LOWER(`payment_status`) <> :status");
				$sql->andWhere($expr);
				$params["status"] = "paid";
			}
		}

		if (count($filter_tasks) > 0) {
			$filterTasksList = implode("','", $filter_tasks);
			$sql->andWhere("`task_uuid` IN ('" . $filterTasksList . "')");
		}

		$sql->orderBy(\strtolower($orderby), "ASC");
		$sql->setParameters($params);

		return $this->findEntities($sql);
	}

	function getObjectById(string $uuid): ?\OCP\AppFramework\Db\Entity {
		$sql = $this->db->getQueryBuilder();
		$sql
			->select("*")
			->from($this->tableName)
			->where("`user_id` = ?")
			->andWhere("`uuid` = ?")
			->setMaxResults(1);
		$sql->setParameters([$this->userId, $uuid]);
		$objects = $this->findEntities($sql);
		if (count($objects) > 0) {
			return $objects[0];
		} else {
			return null;
		}
	}

	function getActiveObjectById(string $uuid, $shared = false): ?\OCP\AppFramework\Db\Entity {
		$objects = $this->getActiveObjectsByAttributeValue("uuid", $uuid, "created", $shared);
		if (count($objects) > 0) {
			return $objects[0];
		} else {
			return null;
		}
	}

	function getObjectsAfterCommit($commit): array {
		$applicable_commits = $this->commitMapper->getCommitsAfter($commit);

		return [
			"created" => $this->getCreatedObjectsAfterCommit($applicable_commits),
			"updated" => $this->getUpdatedObjectsAfterCommit($applicable_commits),
			"deleted" => $this->getDeletedObjectsAfterCommit($applicable_commits),
		];
	}

	function getCreatedObjectsAfterCommit(array $applicable_commits) {
		$sql = $this->db->getQueryBuilder();
		$sql->select("current.*");
		$sql->from($this->tableName, "current");
		$params = [$this->userId, "deleted"];

		if (strpos($this->tableName, "_time") > -1) {
			$sql
				->innerJoin("current", "*PREFIX*timemanager_task", "task", "current.`task_uuid` = task.`uuid`")
				->where("current.`user_id` = ?")
				->andWhere("task.`user_id` = ?");
			$params = [$this->userId, $this->userId, "deleted"];
		} else {
			$sql->where("current.`user_id` = ?");
		}

		$commitList = implode("','", $applicable_commits);
		$sql->andWhere("current.`commit` IN ( '" . $commitList . "' )");
		$sql->andWhere("current.`created` = current.`changed`");
		$sql->andWhere("current.`status` != ?");
		$sql->orderBy("current.changed", "ASC");

		$sql->setParameters($params);

		$objects = array_map(function ($object) {
			return $object->toArray();
		}, $this->findEntities($sql));

		return $objects;
	}

	function getUpdatedObjectsAfterCommit(array $applicable_commits) {
		$sql = $this->db->getQueryBuilder();
		$sql->select("current.*");
		$sql->from($this->tableName, "current");
		$params = [$this->userId, "deleted"];

		if (strpos($this->tableName, "_time") > -1) {
			$sql
				->innerJoin("current", "*PREFIX*timemanager_task", "task", "current.`task_uuid` = task.`uuid`")
				->where("current.`user_id` = ?")
				->andWhere("task.`user_id` = ?");
			$params = [$this->userId, $this->userId, "deleted"];
		} else {
			$sql->where("current.`user_id` = ?");
		}

		$commitList = implode("','", $applicable_commits);
		$sql->andWhere("current.`commit` IN ( '" . $commitList . "' )");
		$sql->andWhere("current.`created` != current.`changed`");
		$sql->andWhere("current.`status` != ?");
		$sql->orderBy("current.changed", "ASC");

		$sql->setParameters($params);

		$objects = array_map(function ($object) {
			return $object->toArray();
		}, $this->findEntities($sql));

		return $objects;
	}

	function getDeletedObjectsAfterCommit(array $applicable_commits) {
		$sql = $this->db->getQueryBuilder();
		$sql->select("current.*");
		$sql->from($this->tableName, "current");
		$params = [$this->userId, "deleted"];

		if (strpos($this->tableName, "_time") > -1) {
			$sql
				->innerJoin("current", "*PREFIX*timemanager_task", "task", "current.`task_uuid` = task.`uuid`")
				->where("current.`user_id` = ?")
				->andWhere("task.`user_id` = ?");
			$params = [$this->userId, $this->userId, "deleted"];
		} else {
			$sql->where("current.`user_id` = ?");
		}

		$commitList = implode("','", $applicable_commits);
		$sql->andWhere("current.`commit` IN ( '" . $commitList . "' )");
		$sql->andWhere("current.`status` = ?");
		$sql->orderBy("current.changed", "ASC");

		$sql->setParameters($params);

		$objects = array_map(function ($object) {
			return $object->toArray();
		}, $this->findEntities($sql));

		return $objects;
	}

	/**
	 * Fetch all items that are associated to the current user
	 * and not deleted
	 *
	 * @return Object[] list if matching items
	 */
	function findActiveForCurrentUser($orderby = "created", $shared = false, $sort = "ASC") {
		$sql = $this->db->getQueryBuilder();
		if ($shared && strpos($this->tableName, "_client") > -1) {
			$sql
				->selectDistinct("client.*")
				->from($this->tableName, "client")
				->leftJoin("client", "*PREFIX*timemanager_share", "share", "client.uuid = share.object_uuid")
				->leftJoin("share", "*PREFIX*group_user", "group_user", "share.recipient_id = group_user.gid");

			$expr = $sql->expr()->orX(
				"share.`recipient_id` = :userid AND share.`recipient_type` = 'user'",
				"group_user.`uid` = :userid AND share.`recipient_type` = 'group'",
				"client.user_id = :userid",
			);
			$sql->where($expr)->andWhere("client.status != :status");

			$sql->orderBy(\strtolower($orderby), $sort);
			$sql->setParameters(["userid" => $this->userId, "status" => "deleted"]);
		} elseif ($shared && strpos($this->tableName, "_project") > -1) {
			$sql
				->selectDistinct("project.*")
				->from($this->tableName, "project")
				->leftJoin("project", "*PREFIX*timemanager_share", "share", "project.client_uuid = share.object_uuid")
				->leftJoin("share", "*PREFIX*group_user", "group_user", "share.recipient_id = group_user.gid");

			$expr = $sql->expr()->orX(
				"share.`recipient_id` = :userid AND share.`recipient_type` = 'user'",
				"group_user.`uid` = :userid AND share.`recipient_type` = 'group'",
				"project.user_id = :userid",
			);
			$sql->where($expr)->andWhere("project.status != :status");

			$sql->orderBy(\strtolower($orderby), $sort);
			$sql->setParameters(["userid" => $this->userId, "status" => "deleted"]);
		} elseif ($shared && strpos($this->tableName, "_task") > -1) {
			$sql
				->selectDistinct("task.*")
				->from($this->tableName, "task")
				->innerJoin("task", "*PREFIX*timemanager_project", "project", "task.project_uuid = project.uuid")
				->leftJoin(
					"project",
					"*PREFIX*timemanager_share",
					"share",
					"project.client_uuid = share.object_uuid AND share.author_user_id != :userid"
				)
				->leftJoin("share", "*PREFIX*group_user", "group_user", "share.recipient_id = group_user.gid");

			$expr = $sql->expr()->orX(
				"share.`recipient_id` = :userid AND share.`recipient_type` = 'user'",
				"group_user.`uid` = :userid AND share.`recipient_type` = 'group'",
				"task.user_id = :userid",
			);
			$sql->where($expr)->andWhere("task.status != :status");

			$sql->orderBy(\strtolower($orderby), $sort);
			$sql->setParameters(["userid" => $this->userId, "status" => "deleted"]);
		} elseif ($shared && strpos($this->tableName, "_time") > -1) {
			$sql
				->selectDistinct("time.*")
				->from($this->tableName, "time")
				->innerJoin("time", "*PREFIX*timemanager_task", "task", "time.task_uuid = task.uuid")
				->innerJoin("task", "*PREFIX*timemanager_project", "project", "task.project_uuid = project.uuid")
				->leftJoin(
					"project",
					"*PREFIX*timemanager_share",
					"share",
					"project.client_uuid = share.object_uuid AND share.author_user_id = :userid"
				);

			$expr = $sql->expr()->orX("share.author_user_id = :userid", "time.user_id = :userid");
			$sql->where($expr)->andWhere("time.status != :status");

			$sql->orderBy(\strtolower($orderby), $sort);
			$sql->setParameters(["userid" => $this->userId, "status" => "deleted"]);
		} else {
			$sql = $this->db->getQueryBuilder();
			$sql
				->select("*")
				->from($this->tableName)
				->where("user_id = ?")
				->andWhere("status != ?")
				->orderBy(\strtolower($orderby), $sort);

			$sql->setParameters([$this->userId, "deleted"]);
		}

		return $this->findEntities($sql);
	}
}
