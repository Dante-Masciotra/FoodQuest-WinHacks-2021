function create_info(name, rating){
    var restaurant = document.createElement('div');
    restaurant.id = "r";
    restaurant.className -"r";
    document.getElementById("test").appendChild(restaurant);
    restaurant.innerHTML= name+" "+rating;
}

var map; 
var infowindow;
var test;
var strings;

function initMap() {
    const myLatLng = { lat: 42.270737, lng: -83.0468638 };
    infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: myLatLng,
    });
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
            createMarker(results[i],i);
          }
        }
      });
  }

  function createMarker(place,i) {
    if (!place.geometry || !place.geometry.location) return;
    const marker = new google.maps.Marker({
      map,
      position: place.geometry.location,
    });

    test=place;
    get_data(i);
    console.log(strings);
    if(strings.indexOf(place.name) !== -1){
    //   create_info(place.name, place.rating);
    //   google.maps.event.addListener(marker, "click", () => {
    //     infowindow.setContent(place.name || "");
    //     infowindow.open(map);
    //     console.log(place.name);
    //   });
    // // }else{
      console.log("big pog")
    }
  }


function get_data(i){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      strings= this.responseText.split('""');
      
      // console.log(typeof this.responseText);
      console.log(strings[0]);
      // console.log(this.responseText);
    }
  }
  xhttp.open("GET", "search.php", true);
  xhttp.send();
}
