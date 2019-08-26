const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const knex = require('knex');

const profile = require('./controllers/profile');
const signin = require('./controllers/signin');
const register = require('./controllers/register');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'Hyunjin',
        port: '5432',
        password: 'jc07kj34',
        database: '\'smart-brain\''
    }
});


const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.sendStatus(404);
});

app.get('/profile/:id', (req, res) => { profile.handleGetProfile(req, res, db) });

app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) });

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) });

app.put('/image', (req, res) => { image.handleImage(req, res, db) });

app.listen(3000, () => {
    console.log('app is running on port 3000.');
});