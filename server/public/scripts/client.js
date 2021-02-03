console.log('in client.js');

$(document).ready(onReady);

function onReady() {
  console.log('so ready');
}

// Grab that data from the server
// GET /allTheQuotes
$.ajax();

// Take array of quotes
// loop d' lop through em
// and render (.append()) to the DOM
