var CLIENTID = "Eq8KSecb2Yz4Lq--EUjuGWH_8OifHCRwdwHr1ztKdLx5Qk_zCZG--AXPSQzMXhL-";
var CLIENTSECRET = "-3Ynmxt9BZab3Qs5sbr_GdzGxXoGqSqbSISFuEQwquYeVm-5-A3nFIcgUOvDSY731GT-hhJtvTK5jYDccT7juQ";
var accessToken= "?access_token=CXyFeSBw2lAdG41xkuU3LS6a_nwyxwwCz2dCkUohw-rw0C49x2HqP__6_4is5RPx";
var API = "https://api.genius.com/search";
var APISong = "https://api.genius.com/songs/";
var artistID = "2262627";
var maxSong= 2471960; 
//Max song is 489579 for a fairly safe number. But 2 million songs 

imgArray = [
	"chool-rainbow.webp",
	"circle-rainbow.jpeg",
	"double-rainbow-mountains.jpeg",
	"rainbow-btn-2.jpeg",
]

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
			//console.log(xhr.responseText); 
		}
	}
};
xhr.open("GET", APISong+artistID+accessToken, false);
//xhr.open("GET", API+accessToken+ '&q=Kendrick%20Lamar', false);

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










	// NOT WORKING- needs more- needs image sizing
	function randomRainbowImg(){
		randomIndex = Math.floor(Math.random() * imgArray.length);
		selectedImg = imgArray[randomIndex]
		document.getElementById("imgBtnContainer")
	}
	
	// rainbow button returns to homepage
	document.getElementById("rainbowTitleBtn").onclick = function () {
		location.href = "index.html";
	}

