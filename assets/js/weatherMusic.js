const container = document.getElementById("container");
const randomButton = document.getElementById("getRandomSong");
const randomSong = document.getElementById("randomSong");
const artist = document.getElementById("artist")
const image = document.getElementById("songImage");

const accessToken = "UmPBuhj-uO4Mca7DY6BBiSWDGEBQWP78u_bl1Ukzmd1NAra-awRwQcL8Y5prJt5F";
const url = `https://api.genius.com/artists/395176/songs?per_page=50&access_token=${accessToken}`;
let songsArray = [];

function buildSongUI(songsArray) {
  songsArray.forEach(function (song) {
    console.log(song.title);
    const songP = document.createElement("p");
    p.textContent = song.title;
    randomSong.appendChild(p);
    // const artistP = document.createElement("p");
    // p.textContent = song.artist;
    // artist.appendChild(p);
  });
}

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    songsArray = response.response.songs;
    // buildSongUI(songsArray);
  })
  .catch((err) => console.error(err));

function getRandomButton() {
  const song = songsArray[Math.floor(Math.random() * songsArray.length)];
  randomSong.textContent = song.title;
  const artist_names = songsArray[Math.floor(Math.random() * songsArray.length)];
  artist.textContent = song.artist_names;

  console.log(song.title);
  console.log(song.artist_names);
  console.log(song.header_image_url)
}

randomButton.addEventListener("click", getRandomButton);

function tweetSong(){
	window.open('https://twitter.com/intent/tweet?hashtags=songs&text=Found a rainbow today! This cool new app called Rainbow Chaser let me drop a pin on the location of the rainbow, and provided me with this cool song as a prize! "'+song['title']+'" by '+song['primary_artist']['name']);
	
}














// rainbow button returns to homepage
document.getElementById("rainbowTitleBtn").onclick = function () {
	location.href = "index.html";
}