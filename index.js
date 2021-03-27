function create_info(){
    var info = {Name:""};
    info.Name="World"
    var restaurant = document.createElement('div');
    restaurant.id = "r";
    restaurant.className -"r";
    document.getElementById("restaurants").appendChild(restaurant);
    restaurant.innerHTML= info.Name;
}
