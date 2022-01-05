<?php

require_once 'conn.php';
require_once 'functions.php';
require_once 'classes/User.php';

if($_SERVER['REQUEST_METHOD'] === 'POST'){
  startSession();
  if(isset($_SESSION['userToken']) && isset($_SESSION['userId'])){
    $user = new User(htmlspecialchars($_SESSION['userId']));
    if($user->auth()){
      $userData = $user->getData();
      echo json_encode(array(
        'status' => 1,
        'msg' => 'Welcome back',
        'accountStatus' => $userData['status'],
      ));
    }
    else{
      echo json_encode(array(
        'status' => 0,
        'msg' => 'Auth error, login please',
      ));
    }
  }
  else{
    echo json_encode(array(
      'status' => 0,
      'msg' => 'Auth error, login please',
    ));
  }
}


?>
