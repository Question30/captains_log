//imports
const express = require('express');
const jsxEngine = require('jsx-view-engine');
const mongoose = require('mongoose');
require('dotenv').config();
const logs = require('./models/logs');
const manyLogs = require('./models/manyLogs')


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

//Seed Route
app.get('/api/logs/seed', async (req, res) => {
    const createdLogs = await logs.insertMany(manyLogs);
    res.send(createdLogs);
})

//Connecting to Database
mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on('error',(e) =>  console.log(e));
db.on('open', () => console.log('Connected to MongoDB'));
db.on('close', () => console.log('MongoDB disconnected'));

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
})