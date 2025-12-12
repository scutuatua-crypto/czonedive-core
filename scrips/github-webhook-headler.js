const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
  const event = req.headers['x-github-event'];
  const payload = req.body;

  if (event === 'installation_target') {
    await axios.post(process.env.SLACK_WEBHOOK_URL, {
      text: `🐋 GitHub App installation target renamed: ${payload.installation_target}`
    });
  }

  res.status(200).send('OK');
});

app.listen(3000, () => console.log('Reef webhook listening on port 3000'));
