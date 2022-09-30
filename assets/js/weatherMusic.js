
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

const container = document.getElementById("container");
const randomButton = document.getElementById("getRandomSong");
const randomSong = document.getElementById("randomSong");
const listOfSongs = document.getElementById("listOfSongs");

const accessToken = "hW3Bng-wVgH972H-hNjQzRyaon_kS2KVssBYMelr6qYupT41QiXmtTJSh1iFZGD-";
const url = `https://api.genius.com/artists/395176/songs?per_page=50&access_token=${accessToken}`;
let songsArray = [];

function buildSongUI(songsArray) {
  songsArray.forEach(function (song) {
    console.log(song.title);
    const li = document.createElement("li");
    li.textContent = song.title;
    listOfSongs.appendChild(li);
  });
}

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    songsArray = response.response.songs;
    buildSongUI(songsArray);
  })
  .catch((err) => console.error(err));

function getRandomButton() {
  const song = songsArray[Math.floor(Math.random() * songsArray.length)];
  randomSong.textContent = song.title;

  console.log(song.title);
}

randomButton.addEventListener("click", getRandomButton);

function tweetSong(){
	window.open('https://twitter.com/intent/tweet?hashtags=songs&text=Found a rainbow today! This cool new app called Rainbow Chaser let me drop a pin on the location of the rainbow, and provided me with this cool song as a prize! "'+song['title']+'" by '+song['primary_artist']['name']);
	
}














// rainbow button returns to homepage
document.getElementById("rainbowTitleBtn").onclick = function () {
	location.href = "index.html";
}





	


		

