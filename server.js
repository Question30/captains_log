//imports
const express = require('express');
const jsxEngine = require('jsx-view-engine');
const mongoose = require('mongoose');
require('dotenv').config();
const Logs = require('./models/logs');
const manyLogs = require('./models/manyLogs');
const methodOverride = require('method-override');


//variables
const app = express();
const PORT = 3000;

//App config
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

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
 * Edit route
 * Displays form to edit entry
 */
app.get('/logs/:id/edit', async (req, res) => {
    const {id} = req.params;
    try {
        const log = await Logs.findById(id);
        res.render('Edit', {log});
    } catch (error) {
        console.log(error);
    }
})

/**
 * Post route
 * Sends data from the form to the database
 */
app.post('/logs', async (req, res) => {
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
      }else{
        req.body.shipIsBroken = false;
      }

    try {
        await Logs.create(req.body);
        res.redirect('/logs')
    } catch (error) {
        console.log(error);
    }
})

/**
 * Delete route
 * Finds log by id and deletes it
 */
app.delete('/api/logs/:id', async (req, res) => {
    const {id} = req.params;
    try {
        await Logs.findByIdAndDelete(id);
        res.redirect('/logs');
    } catch (error) {
        console.log(error);
    }
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