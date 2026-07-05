const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello CSE 341!');
});

app.get('/about', (req, res) => {
	res.send('This is my CSE 341 API');
});

app.get('/user', (req, res) => {
	res.send(`User ID: ${req.query.id}`);
});

app.get('/person', (req, res) => {
	res.json({
		name: req.query.name,
		age: req.query.age
	});
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});