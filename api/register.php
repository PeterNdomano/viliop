<?php

require_once 'conn.php';
require_once 'functions.php';
require_once 'classes/User.php';

if($_SERVER['REQUEST_METHOD'] === 'POST'){
  if(isPostFieldValid('email') && isPostFieldValid('password')){
    $email = htmlspecialchars($_POST['email']);
    $password = $_POST['password'];
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $ffo = User::register($email, $password);
      echo json_encode($ffo);
    }
    else{
      echo json_encode(array(
        'status' => 0,
        'msg' => 'Invalid details',
      ));
    }


  }
  else{
    echo json_encode(array(
      'status' => 0,
      'msg' => 'Invalid request',
    ));
  }
}


?>
