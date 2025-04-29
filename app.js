// Import the Express module
const express = require('express');
// Create an instance of the Express application
const cors = require('cors')
const app = express();

app.use(cors())


// Define the port number for the server to listen on
const port = 3000;

// Define a route that handles requests to /sse endpoint
app.get('/sse', (req, res) => {
  // Set the Content-Type header to 'text/event-stream' to indicate that 
  // the response will be an SSE stream
  res.setHeader('Content-Type', 'text/event-stream');

  // Prevent caching of the stream (important to ensure real-time updates)
  res.setHeader('Cache-Control', 'no-cache');

  // Keep the connection alive to continuously send events
  res.setHeader('Connection', 'keep-alive');

  // Send the headers immediately, so the client starts listening for events
  res.flushHeaders();

  // Initialize a counter variable for the messages
  let counter = 0;

  // Use setInterval to send a new message every second (1000ms)
  setInterval(() => {
    // Send a new SSE message, incrementing the counter each time
    // Each message is prefixed with 'data: ' and followed by the message content
    res.write(`data: This is message ${counter++}\n\n`);
  }, 1000); // This interval runs every 1000 milliseconds (1 second)
});

// Start the Express server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});