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

    }
    $sql = $conn->prepare("UPDATE users SET otp = ?, otpExpiry = ? WHERE id = ?");
    $sql->bind_param('sss', $otp, $otpExpiry, $id);
    $sql->execute();

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
}



?>
