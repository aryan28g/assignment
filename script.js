
const apiKey = 'AIzaSyDB97znD3YGVAiF2cCjmmC8BHC--nYwTf0';

function loadVideo() {
  const videoId = document.getElementById('videoId').value.trim();
  if (!videoId) {
    alert('Please enter a valid YouTube Video ID!');
    return;
  }

  
  fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`)
    .then(response => response.json())
    .then(data => {
      const videoData = data.items[0].snippet;
      const videoTitle = videoData.title;
      const videoDescription = videoData.description;

      
      document.getElementById('videoInfo').innerHTML = `
        <h2>${videoTitle}</h2>
        <p>${videoDescription}</p>
      `;

      
      loadPlayer(`https://www.youtube.com/embed/${videoId}`);
    })
    .catch(error => {
      console.error('Error fetching video details:', error);
      alert('Error fetching video details. Please try again.');
    });
}

function loadPlayer(videoUrl) {
  const playerContainer = document.getElementById('playerContainer');
  playerContainer.innerHTML = `
    <iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
  `;
}
