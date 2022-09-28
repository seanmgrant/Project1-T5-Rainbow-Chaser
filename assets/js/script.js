// maps geoLocate JavaScript

var apiKeyMapBox =
  "pk.eyJ1IjoibW1vY2t1czE1IiwiYSI6ImNsOGc2Nnh4cTBlbTUzdm5obHNtMnNuamMifQ.AZXXr5kGKaQPJ9wbx6oIWQ";
const mainButton = document.querySelector("#rainbowBtn");

mainButton.addEventListener("click", () => {
  alert("This button works!!");
  console.log("this button works");
});

// // this will choose and return an image based on current weather conditions which will be passed as argument to function
// function currentWeather(display) {
//     switch {
//         case 'rainy':

//         case 'cloudy':

//         case 'sunny':

//         case 'windy':

//         case 'lightning':

//         default:

//     }
// }

function fetchMapBoxMap() {
  fetch(`mapbox://styles/mmockus15/cl8g85w5a000315pmfkxv1wab`).then(
    (response) => {
      return response.json();
    }
  );
}

function fetchWeather() {}

const geolocate = new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true,
  },
  trackUserLocation: true,
});
// Add the control to the map.
map.addControl(geolocate);
// Set an event listener that fires
// when a geolocate event occurs.
geolocate.on("geolocate", () => {
  console.log("A geolocate event has occurred.");
});






