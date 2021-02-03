console.log('in client.js');

$(document).ready(onReady);

function onReady() {
  console.log('so ready');

  // Grab that data from the server
  // GET /allTheQuotes
  fetchQuotes();

  // Handle new quote form submit
  $(document).on('submit', '#newQuoteForm', onSubmit);

  console.log('so much to do, so little time....');
}

function onSubmit(event) {
  // Please don't reload... c'mon.
  event.preventDefault();

  console.log('onSubmit');

  // Grab data from form inputs
  const newQuote = {
    quote: $('#quoteInput').val(),
    author: $('#authorInput').val(),
  };
  console.log('newQuote:', newQuote);

  // POST quote data to server
  $.ajax({
    data: {
      quote_to_add: newQuote,
    },
    url: '/quotes',
    method: 'POST',
  }).then(function (response) {
    console.log('Banana Yeah!!!');
  });
}

function fetchQuotes() {
  // Use Ajax!
  // What is AJAX?
  // "Asynchronous JavaScript and XML"
  // Tool for making HTTP network requests
  // from client-side JavaScript code
  // ajax is a function that comes with jQuery
  let ajaxOptions = {
    url: '/allTheQuotes',
    method: 'GET',
  };
  $.ajax(ajaxOptions)
    // Promise to call me back later, plz
    .then(function (quoteList) {
      console.log('got a response:', quoteList);
      $('#quoteList').empty();
      // Take array of quotes
      // loop d' lop through em
      for (let quote of quoteList) {
        // and render (.append()) to the DOM
        $('#quoteList').append(`
          <li>
            <blockquote>
              "${quote.quote}"
              —${quote.author}
            </blockquote>
          </li>
        `);
      }
    })
    .catch(function () {
      // alert('ruh roh... Better contact your webmaster.');
      $('#messages').text('ruh roh... Better contact your webmaster.');
    });

  // could also:
  // $.ajax({
  //   url: '/allTheQuotes',
  //   method: 'GET',
  // }).then(function (response) {
  //   console.log('got a response:', response);
  // });
}
