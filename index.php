<?php
 include "Connect.php"; 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>FoodQuest</title>

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJbqKQlWXmbKyzHxKB8hZY5qTq4Z-8iDQ&sensor=false"></script> 
    <!-- <script async type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJbqKQlWXmbKyzHxKB8hZY5qTq4Z-8iDQ"></script> -->
    <script src="Location.js"></script>
</head>
<body>
    <div class="content">
        <div class="form">
            <div class="title" id="Title">
                <img src="img/foodquesttransparent.png" alt="FoodQuest LOGO" class="logo">
            </div>

            <div class="search" id="search">
                <input type="text" name="location" id="loc" class="location" placeholder="Postal Code: ">
                <br>
                <br>
                <br>
                <br>
                <input type="number" min=1 max=1000 name="distance" id="dis" class="distance" placeholder="Distance (KM): "></input>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <button onclick="getuserLoca()" class="fa fa-search"></button>
            </div>
        </div>
    </div>
</body>
</html>