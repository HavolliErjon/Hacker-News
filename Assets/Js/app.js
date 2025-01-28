import axios from 'axios';  // Aggiungi questa riga per importare Axios
import _ from 'lodash';  // Aggiungi questa riga per usare Lodash
import '../Css/Style.css';  // Carica il CSS con Webpack

document.addEventListener('DOMContentLoaded', () => {
  const newsContainer = document.getElementById('news-list');
  const loadMoreButton = document.getElementById('load-more');
  
  let newsIds = [];
  let currentNewsIndex = 0;
  let newsChunks = [];

  // Funzione per recuperare le ultime notizie
  async function fetchLatestNews() {
    try {
      const response = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
      newsIds = response.data;

      // Suddividi gli ID delle notizie in blocchi da 10
      newsChunks = _.chunk(newsIds, 10);
      
      displayNews(newsChunks[currentNewsIndex]);
    } catch (error) {
      console.error('Errore durante il recupero delle notizie:', error);
      alert('Si è verificato un errore nel recuperare le notizie. Riprova più tardi.');
    }
  }

  // Funzione per recuperare i dettagli di una singola notizia
  async function fetchNewsDetails(newsId) {
    try {
      const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`);
      return response.data;
    } catch (error) {
      console.error('Errore durante il recupero dei dettagli della notizia:', error);
      return null;
    }
  }

  // Funzione per visualizzare le notizie
  async function displayNews(chunk) {
    for (let i = 0; i < chunk.length; i++) {
      const newsData = await fetchNewsDetails(chunk[i]);
      if (!newsData) continue;

      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');
      const formattedDate = new Date(newsData.time * 1000).toLocaleString();

      newsItem.innerHTML = `
        <h3><a href="${newsData.url}" target="_blank" rel="noopener noreferrer">${newsData.title}</a></h3>
        <p><strong>Data:</strong> ${formattedDate}</p>
        <p><strong>Link:</strong> <a href="${newsData.url}" target="_blank" rel="noopener noreferrer">${newsData.url}</a></p>
      `;
      
      newsContainer.appendChild(newsItem);
    }
  }

  // Funzione per caricare il blocco successivo di notizie
  function loadMoreNews() {
    if (newsChunks.length > currentNewsIndex) {
      displayNews(newsChunks[currentNewsIndex]);
      currentNewsIndex++;
    } else {
      alert('No more news to load.');
    }
  }

  fetchLatestNews();

  loadMoreButton.addEventListener('click', loadMoreNews);
});
