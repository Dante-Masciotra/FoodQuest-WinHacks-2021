<?php
    $db = mysqli_connect("localhost","root","","rest");

    if(!$db){
        die("Connection failed".mysqli_connect_error());
    }else{
        // echo "Connected Successfully";
    }

?>