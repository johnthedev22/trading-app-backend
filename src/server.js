import express from 'express'; // Import the express module

const app = express(); // Create an Express application instance
const PORT = 3000; // Define the port number

// Define a route for the root URL (/) that sends a response
app.get('/', (req, res) => {
  res.send('Hello World! This is your starter Express server.');
});

// Start the server and listen for incoming requests on the specified port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
