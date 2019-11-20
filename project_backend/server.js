const dotenv = require('dotenv');
dotenv.config();

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
        connectionString: process.env.POSTGRES_URI,
        ssl: true
    }
});


const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => res.sendStatus(200));
app.get('/profile/:id', profile.handleGetProfile(db));
app.post('/profile/:id', profile.handleProfileUpdate(db));
app.post('/signin', signin.signinAuthentication(db, bcrypt));
app.post('/register', register.handleRegister(db, bcrypt));
app.post('/imageurl', image.handleApiCall());
app.put('/image', image.handleImage(db));

app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running on port ${process.env.PORT ? process.env.PORT : 3000}`);
});