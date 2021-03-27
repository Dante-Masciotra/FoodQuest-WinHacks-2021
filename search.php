<?php
 include "Connect.php";

    $data = json_decode(file_get_contents("php://input"));;
    $Name= $data;
    echo $data;
    $sql = "SELECT * FROM options";
    // $result = mysql_query($sql);
    // $result = "A Dog’s Breakfast";
    // if(strcmp($Name,$result) == 0){
    //     // echo "hello";
    //     echo true;
    // }else{
    //     // echo "bad";

    //     echo false;
    // }
?>