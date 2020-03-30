const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h2> Getting Started </h2>');
});

app.listen(5000, () => {
    console.log('App listening on port 5000');
});