
# Chat Bot

A intelligent chatbot application built using Node.js, Express.js, and vanilla JavaScript. This chatbot is designed to respond to user queries based on pre-defined data stored in JSON files, and it also supports dark/light mode toggling.

#Features

Chatbot responds with pre-defined answers based on user queries.
Fetches data from chatbotData.json and randomChat.json files for different responses.
Allows users to interact with the bot by entering questions in a text input field.
Dark/light mode toggle for a better user experience.
Data stored in JSON files, easily extendable to add new questions and responses.
Designed for easy customization and further integration.

#Usage

Open the chatbot interface in your browser (default: http://localhost:3001).
Type a question into the input box and press "Ask" or hit Enter.
The chatbot will search through the pre-defined questions and answers in the chatbotData.json file and return relevant answers.
If no match is found, the bot will provide a random joke or GK answer from the randomChat.json file.
You can toggle between dark and light modes using the theme toggle button.

#API Endpoints

POST /chatbot/chat: Sends user input to the chatbot and returns a response. This endpoint is handled by the chatbotController.
GET /chatbotData.json: Fetches the chatbotData.json file containing predefined questions and answers.
GET /randomChat.json: Fetches the randomChat.json file containing random jokes and GK answers.

#Technologies Used

Backend: Node.js, Express.js
Frontend: HTML, CSS, JavaScript
Other: Body-Parser, CORS

#Contributing
Feel free to fork the repository, open issues, or submit pull requests. Contributions are welcome!

#Contact
For any inquiries, you can reach out at [rishikapawar2004@gmail.com].

