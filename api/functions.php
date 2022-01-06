<?php

require_once 'conn.php';

function startSession(){
  if(!(session_status() === PHP_SESSION_ACTIVE)){
    session_start();
  }
}

function isPostFieldValid($key){
  if(isset($_POST[$key])){
    if(!empty(trim($_POST[$key]))){
      return true;
    }
  }
  return false;
}

function isGetFieldValid($key){
  if(isset($_GET[$key])){
    if(!empty(trim($_GET[$key]))){
      return true;
    }
  }
  return false;
}

function getSystemParams(){
  global $conn;
  $sql = $conn->prepare("SELECT * FROM systemParams WHERE id = 1");
  $sql->execute();
  $result = $sql->get_result();
  $row = mysqli_fetch_assoc($result);
  return $row;
}

?>
