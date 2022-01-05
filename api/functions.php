<?php

require_once 'conn.php';

function startSession(){
  if(!(session_status() === PHP_SESSION_ACTIVE)){
    session_start();
  }
}



?>
