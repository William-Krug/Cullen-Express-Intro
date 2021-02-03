const express = require('express');
// console.log('express', express);

/// deprecated, express covers this these days
// const bodyParser = require('body-parser');

const quotes = require('./modules/quotes');

// Create our app(lication)
const app = express();

const port = 5000;

// INCANTATION:
// Share any files inside the "./server/public" folder
app.use(express.static('server/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for url requests used with our APIs

/// OPTIONAL BODY PARSER USAGE
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// Listen for network requests
// by convention, use 3000 or 5000 as the port number
// in theory, can be any port number
app.listen(port, function () {
  // When the server is ready, call this function
  console.log(`I'm listening....`, port);
});

// setting up a new route
// you MUST end API with 'send' or 'end'
app.get('/quotes', function (req, res) {
  console.log('GET Request for quotes');
  res.send(quotes.getNextQuote()); //
});

// If you see a EADDRINUSE error,
// run:
//    killall -9 node
// ..and try again

// have things separated out into different modules for security, debugging and ease of coding
// body-parser is middlewear: it takes some input, applies business logic, transforms it and spits it out
// ..to be used with the rest of your code
