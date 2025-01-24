#  Hacker News

<img src="./assets/img/Hackernews.png" width="200" />


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


