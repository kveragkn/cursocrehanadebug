const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'https://cursocrehanadebug.vercel.app'
  }));
app.use(express.static('public'))
app.listen(process.env.PORT || 3000);

var quotes = [
    {
        'text': 'No hay nada como una taza de café para estimular las células del cerebro.',
        'author': 'Sherlock Holmes',
    },
    {
        'text': 'El café es un bálsamo para el corazón y el espíritu.',
        'author': 'Giuseppe Verdi',
    },
    {
        'text': 'El café huele a cielo recién molido.',
        'author': 'Jessi Lane Adams',
    },
    {
        'text': 'No es que el café me de insomnio, es que me hace soñar despierto.',
        'author': 'Anónimo',
    }
];

app.get('/random-quote', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    var randomQuote = getRandomQuote();
	res.send(randomQuote);
});

function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}