let searchBox = document.getElementById("searchBox");

let search = document.getElementById("search");

function buildSongs(itunesData) {
  console.log(itunesData);
  for (let term of itunesData) {
    console.log(term);
  }
}

search.addEventListener("click", (event) => {
  console.log(searchBox.value);
  const userInput = searchBox.value;
  let itunesUrl = `https://itunes.apple.com/search?term=${userInput}`;

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
      // if search has no results return message to user.
    });
});

// loop artist  album, name, album art, and track
