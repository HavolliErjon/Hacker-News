#  Hacker News

<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat&logo=Prettier&logoColor=black" alt="Prettier">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<br>
	<img src="https://img.shields.io/badge/Webpack-8DD6F9.svg?style=flat&logo=Webpack&logoColor=black" alt="Webpack">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/Lodash-3492FF.svg?style=flat&logo=Lodash&logoColor=white" alt="Lodash">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>

<img src="./Assets/Img/Hackernews.png" width="200" />


## Descrizione

Questo progetto è un'applicazione che recupera e visualizza le ultime notizie da Hacker News. Quando l'app viene avviata, fa una richiesta alle API per ottenere una lista degli ID delle notizie, quindi visualizza i dettagli (titolo, link e data) delle prime 10 notizie. L'utente può cliccare sul pulsante "Load more" per caricare altre 10 notizie.

Il tutto è realizzato con **JavaScript**, **HTML**, **CSS** e **Webpack** per il bundling e la gestione del progetto.

### Funzionalità

- Al caricamento, l'app mostra le ultime 10 notizie con il titolo, il link e la data.
- Cliccando su "Load more", vengono caricate altre 10 notizie.
- L'app recupera i dati da Hacker News tramite le sue API.

### Flusso dell'app

1. All'avvio, l'app fa una richiesta per ottenere una lista di ID delle notizie.
2. Recupera i dettagli delle prime 10 notizie.
3. Mostra queste notizie sullo schermo con il titolo, il link e la data.
4. Cliccando su "Load more", l'app carica altre 10 notizie.

## Tecnologie utilizzate

- **HTML** per la struttura della pagina.
- **CSS** per lo stile e il layout.
- **JavaScript** per la logica dell'applicazione, incluse le chiamate alle API.
- **Webpack** per il bundling e la gestione dei file JavaScript.

## Come funziona

1. **Recupero degli ID delle notizie**: L'app invia una richiesta all'API di Hacker News per ottenere una lista di ID delle notizie. L'endpoint utilizzato è:
   ```bash
   https://hacker-news.firebaseio.com/v0/newstories.json


