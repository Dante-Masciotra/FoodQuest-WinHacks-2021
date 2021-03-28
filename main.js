var map; 
var infowindow;
var test;
var strings;

var lStorage =localStorage;
var myStorage = window.sessionStorage;

var lat = myStorage.getItem("Lat");
var lng = myStorage.getItem("Lng");
var radius= myStorage.getItem("rad");
var myLatLng={ lat: 0, lng: 0 };

function create_info(name, rating,price,distance){

    var Rest = document.createElement('div');
    Rest.id = "Rest";
    Rest.className ="r";

    var rName = document.createElement('div');
    rName.id = "rName";
    rName.className ="r";

    var rRating = document.createElement('div');
    rRating.id = "rRating";
    rRating.className ="r";

    var rPrice = document.createElement('div');
    rPrice.id = "rPrice";
    rPrice.className ="r";

    var img = document.createElement('img');
    img.id = "rimg";
    img.className ="r";
    img.src="img/Dollar sign.png"

    var rDist = document.createElement('div');
    rDist.id = "rDist";
    rDist.className ="r";

    document.getElementById("test").appendChild(Rest);
    document.getElementById("test").appendChild(document.createElement('br'));

    Rest.appendChild(rName);
    Rest.appendChild(rRating);
    Rest.appendChild(rPrice);
    for(var i=0; i<price; i++){
      rPrice.appendChild(img);
    }
    Rest.appendChild(rDist);

    rName.innerHTML= name;
    rRating.innerHTML= rating;
    rDist.innerHTML= distance;
}



function initMap() {
    myLatLng = { lat: parseFloat(lat), lng: parseFloat(lng) };
    infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: myLatLng,
    });
    var request = {
        location: myLatLng,
        radius: radius,
        type: ['restaurant']
    };

    var service = new google.maps.places.PlacesService(map);
    var service2 = new google.maps.DistanceMatrixService();
    service.nearbySearch(request, (results, status) => {
        console.log(results);
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          for (let i = 0; i < results.length; i++) {
            service2.getDistanceMatrix({
              origins: [myLatLng],
              destinations: [results[i].vicinity],
              travelMode: 'DRIVING'
            },(response, status) => {
              if (status !== "OK") {
                alert("Error was: " + status);
              } else {
                console.log(response);
                createMarker(results[i],response.rows[0].elements[0].distance.text);
              }
          });
            
            
          }
        }
      });
      
      
      
  }

  function createMarker(place,dist) {
    if (!place.geometry || !place.geometry.location) return;
    const marker = new google.maps.Marker({
      map,
      position: place.geometry.location,
    });

    test=place;
    call_Test();
    console.log(place);
    if(lStorage.getItem(place.name)!=null){
      if(place.business_status == "OPERATIONAL"){
        create_info(place.name, place.rating,place.price_level,dist);
      }else if(place.business_status != "OPERATIONAL"){
        create_info(place.name, place.rating,place.price_level,0);
      }
    }
    // if(strings.indexOf(place.name) !== -1){
    //   create_info(place.name, place.rating);
    //   google.maps.event.addListener(marker, "click", () => {
    //     infowindow.setContent(place.name || "");
    //     infowindow.open(map);
    //     console.log(place.name);
    //   });
    // // }else{
    //   console.log("big pog")
    // }
  }


function get_data(i){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // strings= this.responseText.split('""');
      
      console.log(this.responseText);
      // console.log(strings[0]);
      // console.log(this.responseText);
    }
  }
  xhttp.open("GET", "search.php", true);
  xhttp.send();
}

function StoreData(name, value){
  lStorage.setItem(name, value);
}


function call_Test(){
  // $.get( "search.php", function( data ) {
  //   alert( data[0] );
  // });

  $.ajax({
    type: 'POST',
    url: 'search.php',
    data: 'id=testdata',
    dataType: 'json',
    cache: false,
    success: function(result) {
      for(var i=0; i<result.length;i++){

        StoreData(result[i],result[i]);
      }
    },
  });
}

function get_dist(origin,dest){

}