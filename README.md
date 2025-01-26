#  Hacker News

<img src="https://github.com/user-attachments/assets/ee125a18-cc5b-4d5b-b276-548629185a1f" alt="Image" width="500" height="800"/>

## PANORAMICA DEL PROGETTO:

Questo progetto è un'applicazione web che consente agli utenti di esplorare le ultime notizie tecnologiche provenienti dalla piattaforma Hacker News in tempo reale. Utilizzando le API di Hacker News, l'app recupera e visualizza gli articoli più recenti, includendo dettagli come il titolo, il link e la data di pubblicazione. L'interfaccia è pensata per essere semplice ed efficiente, permettendo agli utenti di caricare altre notizie dinamicamente tramite il pulsante "Load more".

L'obiettivo del progetto è creare uno strumento interattivo e informativo che permetta agli utenti di rimanere aggiornati sulle ultime tendenze tecnologiche.

## COME FUNZIONA

L'applicazione interagisce con l'API di Hacker News per recuperare le ultime notizie. Al caricamento della pagina, l'applicazione recupera un elenco di ID delle storie, preleva i dettagli di ogni storia e li visualizza in un formato semplice e user-friendly.

L'app permette agli utenti di:
- Visualizzare le ultime notizie, comprensive di titolo, data di pubblicazione e link.
- Caricare altre notizie dinamicamente cliccando sul pulsante "Load more".
- Accedere all'articolo originale tramite un link che si apre in una nuova scheda.

I dati visualizzati provengono da Hacker News, garantendo che le informazioni siano sempre aggiornate.

## CARATTERISTICHE

- **Dati in tempo reale**: Recupera le ultime notizie tecnologiche dalla piattaforma Hacker News.
- **Caricamento dinamico**: Il pulsante "Load more" consente agli utenti di caricare articoli aggiuntivi senza ricaricare la pagina.
- **Navigazione semplice**: Ogni articolo include un link che reindirizza gli utenti al post originale su Hacker News.
- **Design responsivo**: L'app è progettata per essere compatibile con dispositivi mobili e si adatta a diverse dimensioni di schermo.

## TECNOLOGIE UTILIZZATE

<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5"> Struttura dell'applicazione. <br><br>
<img src="https://img.shields.io/badge/CSS-1572B6.svg?style=flat&logo=CSS3&logoColor=white" alt="CSS"> Stile per un'interfaccia utente pulita e semplice.<br><br>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript"> Utilizzato per recuperare i dati dall'API, gestire lo stato e aggiornare dinamicamente la pagina.<br><br>
<img src="https://img.shields.io/badge/API-000000.svg?style=flat&logo=API&logoColor=white" alt="API"> L'API di Hacker News è utilizzata per recuperare gli articoli più recenti.<br><br>
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON"> Formato di scambio dati utilizzato per strutturare le informazioni tra il server e il client.<br><br>
<img src="https://img.shields.io/badge/Webpack-8DD6F9.svg?style=flat&logo=Webpack&logoColor=black" alt="Webpack"> Strumento di bundling che ottimizza il flusso di lavoro per la gestione dei moduli e la creazione del pacchetto dell'applicazione.<br><br>

### Flusso dell'app

1. All'avvio, l'app fa una richiesta per ottenere una lista di ID delle notizie.
2. Recupera i dettagli delle prime 10 notizie.
3. Mostra queste notizie sullo schermo con il titolo, il link e la data.
4. Cliccando su "Load more", l'app carica altre 10 notizie.


## Descrizione del Progetto

L'applicazione consente di visualizzare le ultime notizie da Hacker News. All'avvio, l'applicazione recupera un elenco delle ultime notizie utilizzando l'API di Hacker News, mostrando il titolo, il link e la data della news. L'applicazione carica inizialmente solo le prime 10 notizie, e tramite un pulsante "Load more", l'utente può caricare altre 10 notizie alla volta.

### Funzionalità:
- **Visualizzazione delle ultime 10 notizie:** All'avvio, vengono visualizzati i dettagli (titolo, link e data) delle prime 10 notizie.
- **Pulsante "Load more":** Permette di caricare altre 10 notizie alla volta.
- **Recupero delle notizie tramite API:** L'applicazione fa due chiamate API per ogni notizia: una per ottenere l'ID della notizia e una seconda per ottenere i dettagli.
  
### Esempio di API
- **Recuperare gli ID delle ultime notizie:**
Utilizza questo endpoint per ottenere una lista di ID delle ultime notizie pubblicate su Hacker News:
https://hacker-news.firebaseio.com/v0/newstories.json

- **Recuperare i dettagli di una notizia:**
Dopo aver ottenuto un ID di una notizia, puoi usarlo per recuperare i dettagli della notizia, come titolo, link, data di pubblicazione, ecc. Ad esempio, per ottenere i dettagli della notizia con ID 27971502:
https://hacker-news.firebaseio.com/v0/item/27971502.json
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

## CONTATTI

[![LinkedIn][linkedin-shield]][linkedin-url]

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/erjon-havolli-0147b1336/

## Link

Link al sito: <a href="">https://thehackernewss.netlify.app/</a>
