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

  public static function sendOtp($id){
    global $conn;
    $userData = self::getUserData();
    if($userData !== false){
      $otp = rand(123456, 987654);
      $otpExpiry = time() + (30 * 60) //expires after 30 mins
      $sql = $conn->prepare("UPDATE users SET otp = ?, otpExpiry = ? WHERE id = ?");
      $sql->bind_param('sss', $otp, $otpExpiry, $id);
      $sql->execute();
    }


  }

  public static function getUserData($id){
    global $conn;
    $sql = $conn->prepare("SELECT * FROM users WHERE id = ? OR email = ?");
    $sql->bind_param('ss', $id, $id);
    $sql->execute();
    $row = mysqli_fetch_assoc($sql->result);
    if(isset($row['id'])){
      if($row['id'] > 0){
        return $row;
      }
    }
    return false;
  }

  public static function login($email, $password){
    global $conn;
    $ffo = array(
      'status' => 0,
      'msg' => 'Immature function termination',
    );

    $userData = self::getUserData($email);
    if($userData !== false){
      if(password_verify($password, $userData['password'])){
        startSession();
        $_SESSION['userId'] = $sql->insert_id;
        $_SESSION['userToken'] = $token;
        $ffo = array(
          'status' => 1,
          'msg' => 'Successful login',
        );
      }
      else{
        $ffo = array(
          'status' => 0,
          'msg' => 'Invalid login details',
        );
      }
    }
    else{
      $ffo = array(
        'status' => 0,
        'msg' => 'Invalid login details',
      );
    }

    return $ffo;
  }

  public static function register($email, $password){
    global $conn;
    $ffo = array(
      'status' => 0,
      'msg' => 'Immature function termination',
    );

    $testData = self::getUserData($email);
    if($testData === false){
      //register user
      $token = password_hash($email, PASSWORD_DEFAULT);
      $password = password_hash($password, PASSWORD_DEFAULT);
      $sql = $conn->prepare("INSERT INTO users ( email, password, token ) VALUES ( ?, ?, ? )");
      $sql->bind_param('sss', $email, $password, $token);
      if($sql->execute()){
        //send otp
        self::sendOtp($sql->insert_id);
        //startSession
        startSession();
        $_SESSION['userId'] = $sql->insert_id;
        $_SESSION['userToken'] = $token;
        $ffo = array(
          'status' => 1,
          'msg' => 'Successful registration',
        );
      }
      else{
        $ffo = array(
          'status' => 0,
          'msg' => 'Server error',
        );
      }
    }
    else{
      $ffo = array(
        'status' => 0,
        'msg' => 'Email address already exists',
      );
    }
    return $ffo;
  }

  public function getData(){
    $data = self::getUserData($this->id);
  }

  public function verifyUser(){
    global $conn;
    $sql = $conn->prepare("UPDATE users SET status = 1 WHERE id = ?");
    $sql->bind_param('s', $this->id);
    $sql->execute();
  }

  public function verifyOtp($otp){
    global $conn;
    $ffo = array(
      'status' => 0,
      'msg' => 'Immature function termination',
    );

    $userData = $this->getData();
    if($userData !== false ){
      if(intval($userData['otpExpiry']) >= time()){
        if(intval($otp) === intval($userData['otp'])){
          $ffo = array(
            'status' => 1,
            'msg' => 'OTP Ok',
          );
        }
        else{
          $ffo = array(
            'status' => 0,
            'msg' => 'Wrong OTP',
          );
        }
      }
      else{
        self::sendOtp($this->id);
        $ffo = array(
          'status' => 0,
          'msg' => 'OTP has expired, new one was sent to your email address',
        );
      }
    }
    else{
      $ffo = array(
        'status' => 0,
        'msg' => 'Invalid OTP',
      );
    }

    return $ffo;
  }
}



?>
