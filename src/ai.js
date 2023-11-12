const axios = require('axios');

async function sendMessageToChatGPT(url) {
    // Set your API key
    const apiKey = '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'; // Replace with your actual API key

    // Initialize headers for OpenAI API
    const headers = {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
    };

    // Define a conversation array
    const conversation = [];

    // Start a conversation
    conversation.push("You: Hello, ChatGPT!");

    // Add a message with an image URL
    const userMessage = `User: Respond only with the name of the animal in the image: ${url}`;
    conversation.push(userMessage);

    // Define the payload for the POST request
    const data = {
        engine: 'text-davinci-003', // You can use a different engine if needed
        prompt: conversation.join("\n"),
        max_tokens: 50 // Adjust this based on the desired response length
    };

    try {
        // Make a POST request to the OpenAI API
        const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', data, { headers });
        return response.data.choices[0].text;
    } catch (error) {
        console.error('Error sending message to ChatGPT:', error);
        return null;
    }
}

// Example usage
sendMessageToChatGPT('https://example.com/image.jpg')
    .then(response => console.log(response))
    .catch(error => console.error(error));
