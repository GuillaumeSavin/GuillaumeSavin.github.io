var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function init() {
    var geo1 = navigator.geolocation.getCurrentPosition(successGeo(), errorGeo(), options);
}

function successGeo(pos) {
    var geo1 = pos.coords;
    var long = geo1.coords.longitude;
    var lat = geo1.coords.latitude;
    var prec = geo1.coords.accuracy;

    var longDiv = document.getElementById("long");
    var longView = document.createElement("p");
    longView.innerHTML = long;
    longDiv.appendChild(longView);

    var latDiv = document.getElementById("lat");
    var latView = document.createElement("p");
    latView.innerHTML = lat;
    latDiv.appendChild(latView);

    var precDiv = document.getElementById("prec");
    var precView = document.createElement("p");
    precView.innerHTML = prec;
    precDiv.appendChild(precView);

}

function errorGeo(err) {
    var longDiv = document.getElementById("long");
    var longView = document.createElement("p");
    longView.innerHTML = 'ERREUR (${err.code}): ${err.message}';
    longDiv.appendChild(longView);

    var latDiv = document.getElementById("lat");
    var latView = document.createElement("p");
    latView.innerHTML = 'ERREUR (${err.code}): ${err.message}';;
    latDiv.appendChild(latView);

    var precDiv = document.getElementById("prec");
    var precView = document.createElement("p");
    precView.innerHTML = 'ERREUR (${err.code}): ${err.message}';;
    precDiv.appendChild(precView);
}