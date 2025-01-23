  const newsContainer = document.getElementById('news-list');
  let newsIds = [];
  let currentNewsIndex = 0;

  async function fetchLatestNews() {
    const res = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
    const data = await res.json();
    newsIds = data.slice(0, 10);  // Prendiamo solo i primi 10 ID
    displayNews();
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
    displayNews();
  }

  fetchLatestNews();  // Avvia la chiamata iniziale per recuperare le news
