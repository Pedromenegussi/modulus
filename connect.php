<?php

  $db_host = "127.0.0.1";
  $db_user = 'root';
  $db_password = 'root';
  $db_db = 'logistica';
  $db_port = "8888";

  $mysqli = new mysqli(
    $db_host,
    $db_user,
    $db_password,
    $db_db
  );


  #$query =  sprintf("SELECT data_pc FROM mapa_de_compras");
  #$result = mysqli_query($query, "SELECT data_pc FROM mapa_compra") or die('Query failed: ' .$mysqli->connect_error);
  #$row = mysqli_fetch_array($result);

  if ($mysqli->connect_error) {
    echo 'Errno: '.$mysqli->connect_errno;
    echo '<br>';
    echo 'Error: '.$mysqli->connect_error;
    exit();
  }

  $mysqli->close();
?>