const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

const approvedOrigins = ['http://localhost:3000/', 'https://webdevtj.com'];

const corsOptions = {
  origin: function (origin, callback) {
    if (approvedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

app.get('/random-name', async (req, res) => {
  fs.readFile('./data/names.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }

    const names = JSON.parse(data);

    const randomName = names[Math.floor(Math.random() * names.length)];
    res.json(randomName);
  });
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3000');
});
