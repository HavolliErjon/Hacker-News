import axios from 'axios';  // Aggiungi questa riga per importare Axios
import _ from 'lodash'; // Se stai utilizzando Lodash

require('../Css/Style.css'); 

document.addEventListener('DOMContentLoaded', () => {
  const newsContainer = document.getElementById('news-list');
  const loadMoreButton = document.getElementById('load-more'); 

  let newsIds = [];
  let currentNewsIndex = 0;
  let newsChunks = [];  // Variabile per memorizzare i blocchi di notizie

  // Funzione per recuperare le ultime notizie usando Axios
  async function fetchLatestNews() {
    try {
      const response = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
      newsIds = response.data;  // Axios gestisce la risposta come 'response.data'

      // Suddividi gli ID delle notizie in blocchi di 10
      newsChunks = _.chunk(newsIds, 10);  // Usa Lodash per chunking

      displayNews(newsChunks[currentNewsIndex]);  // Mostra il primo blocco di notizie
    } catch (error) {
      console.error('Errore durante il recupero delle notizie:', error);
      alert('Si è verificato un errore nel recuperare le notizie. Riprova più tardi.');
    }
  }

  // Funzione per recuperare i dettagli di una singola notizia usando Axios
  async function fetchNewsDetails(newsId) {
    try {
      const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`);
      return response.data;  // Axios gestisce la risposta come 'response.data'
    } catch (error) {
      console.error('Errore durante il recupero dei dettagli della notizia:', error);
      return null;  // In caso di errore, ritorna null
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
    console.log("Bottone Load More cliccato!");

    // Se ci sono ancora blocchi di notizie da caricare, carica il prossimo
    if (newsChunks.length > currentNewsIndex) {
      displayNews(newsChunks[currentNewsIndex]);  // Carica il prossimo blocco di notizie
      currentNewsIndex++;
    } else {
      alert('No more news to load.');
    }
  }

  fetchLatestNews();

  // Aggiungi l'evento per il bottone "Load More"
  loadMoreButton.addEventListener('click', loadMoreNews);
});
