//imports
const express = require('express');
const app = express();

//variables
const PORT = 3000;

//Routes
app.get('/', (req, res) => {
    res.send('Working');
})

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
})