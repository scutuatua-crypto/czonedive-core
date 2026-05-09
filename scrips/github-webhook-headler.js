const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

function verifySignature(req, secret) {
  const signature = req.headers['x-hub-signature-256'];
  const payload = JSON.stringify(req.body);
  const hmac = crypto.createHmac('sha256', secret);
  const digest = 'sha256=' + hmac.update(payload).digest('hex');
  return signature === digest;
}

app.post('/webhook', async (req, res) => {
  const secret = process.env.WEBHOOK_SECRET;
  if (!verifySignature(req, secret)) {
    return res.status(401).send('Invalid signature');
  }

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
