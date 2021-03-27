
function create_info(name, rating){
    // var info = {Name:""};
    // info.Name="World"
    var restaurant = document.createElement('div');
    restaurant.id = "r";
    restaurant.className -"r";
    document.getElementById("test").appendChild(restaurant);
    restaurant.innerHTML= name+" "+rating;
}

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(initialize);
//     } else { 
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

// var map;
// function initialize(){
//     // var lat=position.coords.latitude;
//     // var long=position.coords.longitude;
//     var center = new google.maps.LatLng(42.270737,-83.0468638);
  
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: center,
//         zoom: 15
//       });
  
//     var request = {
//       location: center,
//       radius: '500',
//       type: ['cafe']
//     };
  
//     var service = new google.maps.places.PlacesService(map);
//     service.nearbySearch(request, callback);

//   }
  
//   function callback(results, status) {
//     if (status == google.maps.places.PlacesServiceStatus.OK) {
//       for (var i = 0; i < results.length; i++) {
//         createMarker(results[i]);
//       }
//     }
//   }
//   function createMarker(place){
//       var placeLoc = place.gemoetry.location;
//       var marker = new google.maps.Marker({
//           map: map,
//           position: place.gemoetry.location
//       });
//   }
//   window.addEventListener('load',getLocation);
//   google.maps.event.addDomListener(window,'load',initialize);

var map; 
var infowindow;
var test;

function initMap() {
    const myLatLng = { lat: 42.270737, lng: -83.0468638 };
    infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: myLatLng,
    });
    // new google.maps.Marker({
    //     position: myLatLng,
    //     map,
    //     title: "Hello World!",
    //   });
    var request = {
        location: myLatLng,
        radius: '5000',
        type: ['restaurant']
    };

    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
        console.log(results);
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          for (let i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      });
  }

  function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;
    const marker = new google.maps.Marker({
      map,
      position: place.geometry.location,
    });

    test=place;
    create_info(place.name, place.rating);
    google.maps.event.addListener(marker, "click", () => {
      infowindow.setContent(place.name || "");
      infowindow.open(map);
      console.log(place.name);
    });
  }
