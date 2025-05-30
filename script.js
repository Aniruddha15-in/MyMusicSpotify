/* 
//Weekly song data
const songHistory = [
  {
    title: "",
    artist: "",
    description: "",
    imageUrl: "",
    youtubeId: ""
  },
  {
    title: "",
    artist: "",
    description: "",
    imageUrl: "",
    youtubeId: ""
  },
  {
    title: "",
    artist: "",
    description: "",
    imageUrl: "",
    youtubeId: ""
  }
];

// Render all songs
const historySection = document.getElementById("song-history");

songHistory.reverse().forEach((song, index) => {
  const songDiv = document.createElement("div");
  songDiv.className = "container";
  songDiv.innerHTML = `
    <img class="song-img" src="${song.imageUrl}" alt="Album Art">
    <div class="title">"${song.title}"</div>
    <div class="artist">by ${song.artist}</div>
    <div class="description">${song.description}</div>
    <iframe src="https://www.youtube.com/embed/${song.youtubeId}" 
            allowfullscreen></iframe>
  `;
  historySection.appendChild(songDiv);
});

*/
