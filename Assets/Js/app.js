document.addEventListener('DOMContentLoaded', () => {
  const newsContainer = document.getElementById('news-list');
  const loadMoreButton = document.getElementById('load-more'); 

  
  console.log(loadMoreButton); 


  let newsIds = [];
  let currentNewsIndex = 0;

 
  async function fetchLatestNews() {
    try {
      const res = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
      if (!res.ok) throw new Error('Errore nella fetch delle ultime notizie');
      const data = await res.json();
      newsIds = data; 
      displayNews();
    } catch (error) {
      console.error('Errore durante il recupero delle notizie:', error);
      alert('Si è verificato un errore nel recuperare le notizie. Riprova più tardi.');
    }
  }

  
  async function fetchNewsDetails(newsId) {
    try {
      const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`);
      if (!res.ok) throw new Error('Errore nella fetch dei dettagli della notizia');
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Errore durante il recupero dei dettagli della notizia:', error);
      return null; 
    }
  }

  
  async function displayNews() {
    for (let i = currentNewsIndex; i < currentNewsIndex + 10; i++) {
      if (newsIds[i]) {
        const newsData = await fetchNewsDetails(newsIds[i]);
        if (!newsData) continue; 

        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        const formattedDate = new Date(newsData.time * 1000).toLocaleString(); 

        newsItem.innerHTML = `
          <h3><a href="${newsData.url}" target="_blank">${newsData.title}</a></h3>
          <p><strong>Data:</strong> ${formattedDate}</p>
          <p><strong>Link:</strong> <a href="${newsData.url}" target="_blank">${newsData.url}</a></p>
        `;
        newsContainer.appendChild(newsItem);
      }
    }

    currentNewsIndex += 10; 
  }


  function loadMoreNews() {
    console.log("Bottone Load More cliccato!");
   
    if (newsIds.length > currentNewsIndex) {
      displayNews();
    } else {
      alert('No more news to load.');
    }
  }

 
  fetchLatestNews();

  loadMoreButton.addEventListener('click', loadMoreNews);
});
