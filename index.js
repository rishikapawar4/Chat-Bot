const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const chatbotController = require('./Controllers/chatbotController');

const app = express();
const PORT = 3001;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Chatbot route - Handle chat request
app.post('/chatbot/chat', chatbotController.handleChat);
// Serve the JSON file
app.get('/chatbotData.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'data','chatbotData.json'));
});

// // Review routes API
// const reviewRoutes = require('./Routes/router');
// app.use('/api/reviews', reviewRoutes);

// // Serve HTML files for different pages
// app.get('/chatbot', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'chatbot.html'));
// });

// // Serve index.html (optional home page)
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
