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

    var vitDiv = document.getElementById("vitesse");
    var vitView = document.createElement("p");
    vitView.innerHTML = vit;
    vitDiv.appendChild(vitView);

}

function errorGeo(err) {
    var longDiv = document.getElementById("long");
    var longView = document.createElement("p");
    longView.innerHTML = `ERREUR (${err.code}): ${err.message}`;
    longDiv.appendChild(longView);

    var latDiv = document.getElementById("lat");
    var latView = document.createElement("p");
    latView.innerHTML = `ERREUR (${err.code}): ${err.message}`;;
    latDiv.appendChild(latView);

    var precDiv = document.getElementById("prec");
    var precView = document.createElement("p");
    precView.innerHTML = `ERREUR (${err.code}): ${err.message}`;;
    precDiv.appendChild(precView);
}