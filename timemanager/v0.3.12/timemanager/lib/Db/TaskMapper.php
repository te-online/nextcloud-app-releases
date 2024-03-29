<?php

namespace OCA\TimeManager\Db;

use OCP\IDBConnection;

/**
 * Class TaskMapper
 *
 * @package OCA\TimeManager\Db
 * @method Task insert(Task $entity)
 */
class TaskMapper extends ObjectMapper {
	private $timeMapper;

	public function __construct(IDBConnection $db, CommitMapper $commitMapper, TimeMapper $timeMapper) {
		parent::__construct($db, $commitMapper, "timemanager_task");
		$this->timeMapper = $timeMapper;
	}

	public function deleteWithChildrenByProjectId($uuid, $commit) {
		$tasks = $this->getActiveObjectsByAttributeValue("project_uuid", $uuid);
		foreach ($tasks as $task) {
			$task->setChanged(date("Y-m-d H:i:s"));
			$task->setCommit($commit);
			$task->setStatus("deleted");
			$this->update($task);
			$this->deleteChildrenForEntityById($task->getUuid(), $commit);
		}
	}

	public function deleteChildrenForEntityById($uuid, $commit) {
		$this->timeMapper->deleteByTaskId($uuid, $commit);
	}

	public function getHours($uuid) {
		$times = $this->timeMapper->getActiveObjectsByAttributeValue("task_uuid", $uuid, "created", true);
		$sum = 0;
		if (count($times) > 0) {
			foreach ($times as $time) {
				$sum += $time->getDurationInHours();
			}
		}
		return $sum;
	}
}
