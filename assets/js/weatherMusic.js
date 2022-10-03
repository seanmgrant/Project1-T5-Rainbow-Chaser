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
  console.log(tweetSong);
	window.open('https://twitter.com/intent/tweet?hashtags=rainbowchaser&text=Found a rainbow today! This cool new app called Rainbow Chaser let me drop a pin on my current location where I saw a rainbow! I was provided with an awesome song as a prize! Checkout the app at "url goes here"! "'
)};















// rainbow button returns to homepage
document.getElementById("rainbowTitleBtn").onclick = function () {
	location.href = "index.html";
}


let latLong = window.localStorage.getItem("latLong");
		console.log(JSON.parse(latLong));

document.getElementById("latLong").innerHTMl = 
document.getElementById("p").textContent += latLong;
    