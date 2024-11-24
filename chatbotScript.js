// Fetch the JSON data from questions.json
async function fetchQuestions() {
    const response = await fetch('http://localhost:3001/chatbotData.json'); // Use the correct server URL
    if (!response.ok) {
        throw new Error('Failed to load questions.json');
    }
    return response.json();
}

document.getElementById('ask-btn').addEventListener('click', async function() {
    // Get the user input
    const userQuery = document.getElementById('user-query').value.toLowerCase().trim();

    // If the input is empty, do nothing
    if (!userQuery) {
        document.getElementById('response-area').innerHTML = 'Please enter a question!';
        return;
    }

    try {
        // Fetch the questions and answers from the JSON file
        const questions = await fetchQuestions();
        const matchedQuestions = [];

        // Check if any question contains the user's query in its keywords
        questions.forEach(item => {
            item.keywords.forEach(keyword => {
                if (userQuery.includes(keyword.toLowerCase())) {
                    matchedQuestions.push(item);
                }
            });
        });

        // Display the matched questions and answers
        const responseArea = document.getElementById('response-area');
        responseArea.innerHTML = ''; // Clear the previous responses

        if (matchedQuestions.length > 0) {
            matchedQuestions.forEach(item => {
                const questionAnswer = `
                    <div class="response-item">
                        <strong> ${item.question}</strong>
                        <p>${item.answer}</p>
                    </div>
                `;
                responseArea.innerHTML += questionAnswer;
            });
        } else {
            // If no questions matched, show a custom message
            const apologyMessage = `
                <div class="response-item">
                    <p><strong>Bot:</strong> Sorry, I can't help. Please enter a valid question.</p>
                </div>
            `;
            responseArea.innerHTML += apologyMessage;
        }

    } catch (error) {
        console.error(error);
        document.getElementById('response-area').innerHTML = 'Error fetching data.';
    }

    // Clear the input field after processing
    document.getElementById('user-query').value = '';

    // Scroll to the bottom of the response area
    const responseArea = document.getElementById('response-area');
    responseArea.scrollTop = responseArea.scrollHeight;
});
