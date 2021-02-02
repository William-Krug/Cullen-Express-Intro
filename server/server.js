const express = require('express');
// console.log('express', express);

// Create our app(lication)
const app = express();

const port = 5000;

// INCANTATION:
// Share any files inside the "./server/public" folder
app.use(express.static('server/public'));

// Listen for network requests
// by convention, use 3000 or 5000 as the port number
// in theory, can be any port number
app.listen(port, function () {
  // When the server is ready, call this function
  console.log(`I'm listening....`, port);
});

// If you see a EADDRINUSE error,
// run:
//    killall -9 node
// ..and try again
