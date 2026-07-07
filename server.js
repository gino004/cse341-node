const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const professionalData = require('./data/professionalData');

const port = 8080;

app.get('/professional', (req, res) => {
	res.json(professionalData);
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});