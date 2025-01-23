const newsContainer = document.getElementById('news-list');
let newsIds = [];
let currentNewsIndex = 0;
let loadedNewsCount = 0; // Tracciamo quante notizie sono già state caricate

async function fetchLatestNews() {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
  const data = await res.json();
  newsIds = data; // Salviamo tutti gli ID in newsIds
  displayNews(); // Mostriamo i primi 10 articoli
}

async function fetchNewsDetails(newsId) {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`);
  const data = await res.json();
  return data;
}

async function displayNews() {
  for (let i = currentNewsIndex; i < currentNewsIndex + 10; i++) {
    if (newsIds[i]) {
      const newsData = await fetchNewsDetails(newsIds[i]);
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');
      const formattedDate = new Date(newsData.time * 1000).toLocaleString(); // Convertiamo il timestamp

      newsItem.innerHTML = `
        <h3><a href="${newsData.url}" target="_blank">${newsData.title}</a></h3>
        <p><strong>Data:</strong> ${formattedDate}</p>
        <p><strong>Link:</strong> <a href="${newsData.url}" target="_blank">${newsData.url}</a></p>
      `;
      newsContainer.appendChild(newsItem);
    }
  }

  currentNewsIndex += 10; // Aggiorniamo l'indice per caricare le news successive
}

function loadMoreNews() {
  // Carichiamo i successivi 10 articoli solo se ce ne sono
  if (newsIds.length > currentNewsIndex) {
    displayNews();
  } else {
    alert('No more news to load.');
  }
}

fetchLatestNews();  // Avvia la chiamata iniziale per recuperare le news
