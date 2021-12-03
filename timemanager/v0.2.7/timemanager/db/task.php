<?php

namespace OCA\TimeManager\Db;

use OCP\AppFramework\Db\Entity;
use OCA\TimeManager\Helper\ISODate;

/**
 * Class Item
 *
 * @package OCA\TimeManager\Db
 * @method string getName()
 * @method void setName(string $value)
 * @method string getUuid()
 * @method void setUuid(string $value)
 * @method string getNote()
 * @method void setNote(string $value)
 * @method string getUserId()
 * @method void setUserId(string $value)
 */
class Task extends Entity {
	protected $changed;
	protected $created;
	protected $name;
	protected $projectUuid;
	protected $uuid;
	protected $commit;
	protected $userId;
	protected $status;
	protected $billable;

	/**
	 * Creates an array that represents the item in array format
	 *
	 * @return array item representation as array
	 */
	function toArray() {
		return [
			"changed" => ISODate::convert($this->getChanged()),
			"commit" => $this->getCommit(),
			"created" => ISODate::convert($this->getCreated()),
			"name" => $this->getName(),
			"project_uuid" => $this->getProjectUuid(),
			"uuid" => $this->getUuid(),
		];
	}

	/**
	 * Gets the created date
	 *
	 * @return string
	 */
	function getCreatedDate() {
		$created = date_create($this->getCreated());
		return date_format($created, "j. F Y");
	}
}
