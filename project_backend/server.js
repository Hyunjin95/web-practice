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
    res.sendStatus(200);
});

app.get('/profile/:id', profile.handleGetProfile(db));
app.post('/signin', signin.handleSignin(db, bcrypt));
app.post('/register', register.handleRegister(db, bcrypt));
app.post('/imageurl', image.handleApiCall());
app.put('/image', image.handleImage(db));

app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running on port ${process.env.PORT ? process.env.PORT : 3000}`);
});