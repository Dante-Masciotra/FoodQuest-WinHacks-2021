function create_info(){
    var info = {Name:""};
    info.Name="World"
    var restaurant = document.createElement('div');
    restaurant.id = "r";
    restaurant.className -"r";
    document.getElementById("restaurants").appendChild(restaurant);
    restaurant.innerHTML= info.Name;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getInfo);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
  
function getInfo(position){
    var lat=position.coords.latitude;
    var long=position.coords.longitude;
    var loca = new google.maps.LatLng(lat,long);
  
    map = new google.maps.Map(document.getElementById('map'), {
        center: loca,
        zoom: 15
      });
  
    var request = {
      location: loca,
      radius: '500',
      type: ['restaurant']
    };
  
    // service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  }
  
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }
  google.maps.event.addDomListener(window,'load',initialize);