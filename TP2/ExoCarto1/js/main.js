var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function init() {
    navigator.geolocation.getCurrentPosition(successGeo, errorGeo, options);
}

function successGeo(pos) {
    var geo1 = pos.coords;
    var long = geo1.longitude;
    var lat = geo1.latitude;
    var prec = geo1.accuracy;
    var vit = geo1.speed;
    var time = pos.timestamp;

    console.log("lat = " + lat);
    console.log("long = " + long);
    console.log("prec = " + prec);
    console.log("vit = " + vit);
    console.log("time = " + time);
}

function errorGeo(err) {
    console.log(`ERREUR (${err.code}): ${err.message}`);
}