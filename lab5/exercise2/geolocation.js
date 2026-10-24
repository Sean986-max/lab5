// get the paragraph that will show the result
var x = document.getElementById("geolocation");

function getGeolocation() {
    // ask the browser for the current position
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showGeolocation, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showGeolocation(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    // this runs when the user blocks the request or it takes too long
    x.innerHTML = "Unable to get your location: " + error.message;
}
