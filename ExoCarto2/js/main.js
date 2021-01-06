function init() {
    var geo1 = navigator.geolocation.getCurrentPosition();
    var long = geo1.coords.longitude;
    var lat = geo1.coords.latitude;
    var prec = geo1.coords.accuracy;

    var longView = document.getElementById("long");
    var latView = document.getElementById("lat");
    var precView = document.getElementById("prec");

    longView.innerHTML = long;
    latView.innerHTML = lat;
    precView.innerHTML = prec;
}