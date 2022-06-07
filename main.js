let searchBox = document.getElementById("searchBox");
let search = document.getElementById("search");
const searchResults = document.getElementById("search-results");
let form = document.getElementById("searchForm");

function buildSongs(itunesData) {
  console.log(itunesData);
  for (let term of itunesData) {
    console.log(term);
  }
}

form.addEventListener("submit", (event) => {
  console.log(searchBox.value);
  const userInput = searchBox.value;
  let itunesUrl = `https://itunes.apple.com/search?term=${userInput}`;

  event.preventDefault();

  fetch(itunesUrl, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      // the response is the promised data
      return response.json();
      //put the output in json format
    })
    .then(function (data) {
      buildSongs(data.results);
      console.log(data.results);
      searchResults.innerHTML = "";

      // if search has no results return message

      // loop artist album, name, art, and song name
      for (let song of data.results) {
        let songDiv = document.createElement("div");
        songDiv.classList.add("song-info");
        // Song Name
        let songEl = document.createElement("song");
        songEl.classList.add("song-name");
        songEl.innerText = `"${song.trackName}"`;
        songDiv.appendChild(songEl);
        // Artist name
        let artistDiv = document.createElement("div");
        artistDiv.classList.add("artist");
        artistDiv.innerText = song.artistName;
        songDiv.appendChild(artistDiv);
        console.log(song.artistName);
        //Album name
        let albumDiv = document.createElement("div");
        albumDiv.classList.add("album");
        albumDiv.innerText = song.collectionName;
        songDiv.appendChild(albumDiv);
        //Art
        let imageEl = document.createElement("img");
        imageEl.src = song.artworkUrl100;
        imageEl.classList.add("art");
        songDiv.appendChild(imageEl);

        searchResults.appendChild(songDiv);
      }
    });
});
