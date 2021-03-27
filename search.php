<?php
 include "Connect.php";

    $Name="A Dog’s Breakfast";
    $sql = "SELECT * FROM options";
    // $result = mysql_query($sql);
    $result = "A Dog’s Breakfast";
    if(strcmp($Name,$result) == 0){
        // echo "hello";
        echo true;
    }else{
        // echo "bad";

        echo false;
    }
?>