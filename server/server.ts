const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3001;

const corsOptions = {
    origin: 'http://localhost:3000', // your client server
    methods: 'GET',
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get('/models', (req, res) => {
    axios.get('https://api.openai.com/v1/models', {
        headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
    })
        .then((response) => {
            const gptResponse = response.data;
            const modelNames = gptResponse.data.map((model) => model.id);
            res.send(modelNames);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error fetching models from OpenAI');
        });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
