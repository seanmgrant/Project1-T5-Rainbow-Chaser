// maps geoLocate JavaScript

var apiKeyMapBox = "pk.eyJ1IjoibW1vY2t1czE1IiwiYSI6ImNsOGc2Nnh4cTBlbTUzdm5obHNtMnNuamMifQ.AZXXr5kGKaQPJ9wbx6oIWQ";
const mainButton = document.querySelector("#rainbowBtn");

// the code here is for the backgrounda animation
const position = document.documentElement;

position.addEventListener("mousemove", (event) => {
        position.style.setProperty('--x', event.clientX + 'px');
    });


mainButton.addEventListener("click", () => {

});

console.log(latLong);



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
	enableHighAccuracy: true
	},
	trackUserLocation: true
	});
	// Add the control to the map.
	map.addControl(geolocate);
	// Set an event listener that fires
	// when a geolocate event occurs.
	geolocate.on('geolocate', () => {
	console.log('A geolocate event has occurred.');
	});


function chooseImage() {



}

//   positionOptions: {
//     enableHighAccuracy: true,
//   },
//   trackUserLocation: true,
// });
// Add the control to the map.
map.addControl(geolocate);
// Set an event listener that fires
// when a geolocate event occurs.
geolocate.on("geolocate", () => {
  console.log("A geolocate event has occurred.");
});




