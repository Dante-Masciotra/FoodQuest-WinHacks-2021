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
</head>
<body>
    <div class="content">
        <div class="title" id="Title">
            <h1 class="title-text">FoodQuest</h1>
        </div>

        <div class="search" id="search">
            <input type="text" name="location" id="loc" class="location" placeholder="Postal Code: e.g N9G 2V7">
            <br>
            <br>
            <br>
            <br>
            <input type="text" name="distance" id="dis" class="distance" placeholder="Distance in Kilometers: e.g 15"></input>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <a href="info.html"><button class="fa fa-search"></button></a>
        </div>

        <div class="footer">
            <h3 class="about">About Us</h3>
            <h6 class="us">Info about us goes here how we started why were still doing it community helping ect ect</h6>
        </div>
    </div>
    <script src="main.js"></script>
</body>
</html>