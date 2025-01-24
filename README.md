#  Hacker News


<img src="./Assets/Img/Hackernews.png" width="200" />


## Descrizione
Hacker News è un'applicazione sviluppata per democratizzare la diffusione di informazioni in ambito tech attraverso l'utilizzo dell'omonimo servizio <a href="https://github.com/HackerNews/API">(https://github.com/HackerNews/API).</a><br />
<br />

### Funzionalità

Questo progetto è un'applicazione che recupera e visualizza le ultime notizie da Hacker News. Quando l'app viene avviata, fa una richiesta alle API per ottenere una lista degli ID delle notizie, quindi visualizza i dettagli (titolo, link e data) delle prime 10 notizie. L'utente può cliccare sul pulsante "Load more" per caricare altre 10 notizie.

### Flusso dell'app

1. All'avvio, l'app fa una richiesta per ottenere una lista di ID delle notizie.
2. Recupera i dettagli delle prime 10 notizie.
3. Mostra queste notizie sullo schermo con il titolo, il link e la data.
4. Cliccando su "Load more", l'app carica altre 10 notizie.

## Repository Structure

Per inserire la struttura del progetto nel tuo README.md con il formato che desideri, puoi utilizzare i tripli backtick (```) per formattare il blocco di codice. Ecco come inserire la struttura direttamente nel tuo README.md:

markdown
Copia
# Hacker News Reader

## Descrizione del Progetto

L'applicazione consente di visualizzare le ultime notizie da Hacker News. All'avvio, l'applicazione recupera un elenco delle ultime notizie utilizzando l'API di Hacker News, mostrando il titolo, il link e la data della news. L'applicazione carica inizialmente solo le prime 10 notizie, e tramite un pulsante "Load more", l'utente può caricare altre 10 notizie alla volta.

### Funzionalità:
- **Visualizzazione delle ultime 10 notizie:** All'avvio, vengono visualizzati i dettagli (titolo, link e data) delle prime 10 notizie.
- **Pulsante "Load more":** Permette di caricare altre 10 notizie alla volta.
- **Recupero delle notizie tramite API:** L'applicazione fa due chiamate API per ogni notizia: una per ottenere l'ID della notizia e una seconda per ottenere i dettagli.
  
### Esempio di API:
- Per ottenere gli ID delle ultime notizie:  
  `https://hacker-news.firebaseio.com/v0/newstories.json`
- Per ottenere i dettagli di una notizia (esempio con ID 27971502):  
  `https://hacker-news.firebaseio.com/v0/item/27971502.json`
## Struttura del Progetto

```
└── /Hacker News
    ├── README.md
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── webpack.config.js
    ├── Assets
    │   ├── css
    │   │   ├── Style.css
    │   │   
    │   ├── Img
    │   │   ├── Favicon.ico
    │   │   └── News.jpg
    │   └── Js
    │       ├── app.js
    │      
    ├── tailwind.config.js
    └── webpack.config.js

```

### Tecnologie Utilizzate

<p>
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
<br>
<img src="https://img.shields.io/badge/CSS-1572B6.svg?style=flat&logo=CSS3&logoColor=white" alt="CSS">
<br>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<br>
<img src="https://img.shields.io/badge/Webpack-8DD6F9.svg?style=flat&logo=Webpack&logoColor=black" alt="Webpack">
<br>
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<br>
</p>

## Link

<a href="">Link al sito</a>


