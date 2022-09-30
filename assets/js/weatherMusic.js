var CLIENTID = "yl9kE00201CanbnUZ459WfIu__BwgYur3KhDHfM12B7n0ztlRAlG-XkDMdisCDvc";
var CLIENTSECRET = "9zw7du1Xkpw55F7L1uoZaYnaTLkmL9IgqC8L5nW9XUooOtd8JbSy3AtJ70CV3z4upXFS15t2_8um6def8iUHjQ";
var accessToken= "?access_token=ZCPupfL9NToUnxJxrfLyHz2_kisz6QEKCes6-XxoEmn8SWZvRmau4LtsbAsh-JOw";
var apiUrl = "https://api.genius.com/search";
var APISong = "https://api.genius.com/songs/";
var artistID = "395176";
var maxSong= 2471960; 
//Max song is 489579 for a fairly safe number. But 2 million songs 
console.log(coordinates);

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 */
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//https://api.genius.com/search?q=Kendrick%20Lamar
var xhr = new XMLHttpRequest(); //XML HTTP Request
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		if (xhr.status === 200 || xhr.status === 304) {
			// Success! Do stuff with data.
			console.log(xhr.responseText); 
		}
	}
};
xhr.open("GET", APISong+artistID+accessToken, false);
//xhr.open("GET", apiUrl+accessToken+ '&q=Kendrick%20Lamar', false);

xhr.send(); 
//console.log(xhr.status);
//console.log(xhr.statusText);
demo=xhr.response;

var json = JSON.parse(demo);
var song = json['response']['song'];


function newRandomSong() {
	artistID =getRandomInt(1,maxSong);
	randomSong();
}

function randomSong(){
	xhr.open("GET", APISong+artistID+accessToken, false);
	xhr.send(); 
	demo=xhr.response;
	
	while (xhr.status===404){ //Checks if the Random Song Exists
		artistID =getRandomInt(1,maxSong);
		xhr.open("GET", APISong+artistID+accessToken, false);
		xhr.send(); 
		demo=xhr.response;
	}
	
	json = JSON.parse(demo);
	song = json['response']['song'];
	document.getElementById("songImage").innerHTML = "<img src=\""+song['song_art_image_url']+"\"alt=\"Some Awesome Album Art\" style=\"width:200px;height:200px;\">";
	// I made these pixel values since I'd rather have overlap on a small screen than the image scaled too small 
	
	
	//document.getElementById("song").innerHTML = "SONG: <a href="+song['url']+" >"+song['title'].toUpperCase()+"</a>";
	document.getElementById("song").innerHTML = "SONG: <a target=\"_blank\" href="+song['url']+" >"+song['title'].toUpperCase()+"</a>";
	
	document.getElementById("artist").innerHTML = "ARTIST: <a target=\"_blank\"  href="+song['primary_artist']['url']+">"+song['primary_artist']['name'].toUpperCase()+"</a>";
}
function tweetSong(){
	window.open('https://twitter.com/intent/tweet?hashtags=songs&text=Found a rainbow today! This cool new app called Rainbow Chaser let me drop a pin on the location of the rainbow, and provided me with this cool song as a prize! "'+song['title']+'" by '+song['primary_artist']['name']);
	
}







// rainbow button returns to homepage
document.getElementById("rainbowTitleBtn").onclick = function () {
	location.href = "index.html";
}




// NOT WORKING- rainbow image array needs to show on page with random button click
imgArray = [
	"chool-rainbow.webp",
	"circle-rainbow.jpeg",
	"double-rainbow-mountains.jpeg",
	"rainbow-btn-2.jpeg",
]
function randomRainbowImg(imgArray){
	randomIndex = Math.floor(Math.random() * imgArray.length);
	selectedImg = imgArray[randomIndex]
	return selectedImg;
}
var rainbowButton = document.getElementById('imgButtonEl');

rainbowButton.addEventListener("click", randomRainbowImg(imgArray) 
)
	


		

