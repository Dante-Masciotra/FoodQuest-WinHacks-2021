<?php
 include "Connect.php";

    $sql = mysqli_query($db, "SELECT * FROM options");

    while($row = mysqli_fetch_array($sql)) {
        $names[] = $row['name'];
    }

    foreach($names as $name) {
        echo json_encode($name);
        }

?>