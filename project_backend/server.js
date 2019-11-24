const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const knex = require('knex');

module.exports = {
    redisClient: require('redis').createClient(process.env.REDIS_URL)
};

const profile = require('./controllers/profile');
const signin = require('./controllers/signin');
const signout = require('./controllers/signout');
const register = require('./controllers/register');
const image = require('./controllers/image');
const auth = require('./controllers/authorization');


const db = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.POSTGRES_URL,
        ssl: true
    }
});


const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => res.sendStatus(200));
app.post('/register', register.handleRegister(db, bcrypt));
app.post('/signin', signin.signinAuthentication(db, bcrypt));
app.post('/signout', auth.requireAuth, signout.handleSignout());
app.get('/profile/:id', auth.requireAuth, profile.handleGetProfile(db));
app.post('/profile/:id', auth.requireAuth, profile.handleProfileUpdate(db));
app.post('/imageurl', auth.requireAuth, image.handleApiCall());
app.put('/image', auth.requireAuth, image.handleImage(db));

app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running on port ${process.env.PORT ? process.env.PORT : 3000}`);
});
