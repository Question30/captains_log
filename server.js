//imports
const express = require('express');
const jsxEngine = require('jsx-view-engine');


//variables
const app = express();
const PORT = 3000;

//App config
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.get('/', (req, res) => {
    res.send('Working');
})

app.get('/new', (req, res) => {
    res.render('New')
});

app.post('/logs', (req, res) => {
    res.send(req.body);
})

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
})