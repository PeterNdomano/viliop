<?php

require_once '../conn.php';
require_once '../functions.php';

/**
 * Handles all user activities
 */
class User
{
  private $id;
  function __construct($id)
  {
    $this->id = $id;
  }

  static function getData($id){
    global $conn;
    $sql = $conn->prepare("SELECT * FROM users WHERE id = ?");
    $sql->bind_param('s', $id);
    $sql->execute();
    $row = mysqli_fetch_assoc($sql->result);
    if(isset($row['id'])){
      if($row['id'] > 0){
        return $row;
      }
    }
    return false;
  }
}



?>
