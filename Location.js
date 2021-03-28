var geocoder= new google.maps.Geocoder();

var lat = '';
var lng = '';
var radius = '';

var myStorage = window.sessionStorage;

var count=0;

function getuserLoca(){
    count++;
    CurLocation=document.getElementById('loc').value;
    radius=document.getElementById('dis').value;
    //convert to miles
    radius*=1000;
    
    geocoder.geocode( { 'address': CurLocation}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
         lat = results[0].geometry.location.lat();
         lng = results[0].geometry.location.lng();
         myStorage.setItem("Lat",lat);
         myStorage.setItem("Lng",lng);
         myStorage.setItem("rad",radius);
             window.location.href = "/info.html";
        } else {
        alert("Not A Valid Postal Code");
      }
    });
}
