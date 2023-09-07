//imports
const express = require('express');
const jsxEngine = require('jsx-view-engine');
const mongoose = require('mongoose');
require('dotenv').config();
const Logs = require('./models/logs');
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

/**
 * index route
 * Displays all logs from the database
 */
app.get('/logs', async (req, res)=> {
    try{
        const logs = await Logs.find({});
        res.render('Index', {logs});
    }catch(e){
        console.log(e);
    }
    
})

/**
 * New Route
 * Returns a page with a form
 */
app.get('/logs/new', (req, res) => {
    res.render('New')
});


/**
 * Show Route
 * get log by id and render
 */
app.get('/logs/:id', async (req, res) =>{
    const {id} = req.params;
    try {
        const log = await Logs.findById(id);
        res.render('Show', {log})
    } catch (error) {
        console.log(error);
    }
})

/**
 * Post route
 * Sends data from the form to the database
 */
app.post('/logs', (req, res) => {
    res.send(req.body);
})

//Seed Route
app.get('/api/logs/seed', async (req, res) => {
    const createdLogs = await Logs.insertMany(manyLogs);
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