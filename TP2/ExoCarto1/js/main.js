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

    generateMap(geo1);
}

function errorGeo(err) {
    console.log(`ERREUR (${err.code}): ${err.message}`);
}

function generateMap(coords) {
    console.log("before map");
    var mymap = L.map('mapid').setView([coords.latitude, coords.longitude], 3);
    console.log("after map");
    var marker = L.marker([43.3, 5.4]).addTo(mymap);
    var polygon = L.polygon([
        [25.76, -80.19],
        [18.38, -67.19],
        [32.30, -64.79]
    ], { color: 'red' }).addTo(mymap);
    var circle = L.circle([coords.latitude, coords.longitude], { radius: coords.accuracy}).addTo(mymap);
    L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    var a = 2 * 6371 * 1000;
    var b = Math.pow(Math.sin((43.3 - coords.latitude) / 2), 2);
    var c = Math.pow(Math.sin((5.4 - coords.longitude) / 2),2);
    var d = Math.cos(coords.latitude) * Math.cos(43.3) * c;
    var e = Math.sqrt(b + d);
    var final = a * Math.asin(e);
    var distMarseille = (final / 1000).toFixed(1) + " km";
    console.log(distMarseille);

    var pDist = document.getElementById("dist");
    pDist.innerHTML = "La distance entre votre position et Marseille est de : " + distMarseille;
}