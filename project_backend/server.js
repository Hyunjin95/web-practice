const express = require('express');

const app = express();
app.use(express.json());

const database = {
    users: [
        {
            id: '123',
            name: 'abc',
            email: 'abc@abc.com',
            password: 'pw',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'sally',
            email: 'sally@abc.com',
            password: 'bananas',
            entries: 0,
            joined: new Date()
        },
    ],

};

app.get('/', (req, res) => {
    res.send(database.users);
});

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    
    database.users.forEach(user => {
        if (user.id == id) {
            return res.json(user);
        }
    });
    
    res.status(404).json('no such user');
});

app.post('/signin', (req, res) => {
    if (req.body.email == database.users[0].email &&
    req.body.password == database.users[0].password) {
        res.json('success');
    }
    else {
        res.status(400).json('error loging in');
    }
});

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    database.users.push({
        id: '15151',
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    });
    res.json(database.users[database.users.length-1]);
});

app.put('/image', (req, res) => {
    const { id } = req.params;
    database.users.forEach(user => {
        if (user.id == id) {
            return res.json(++user.entries);
        }
    });
    res.status(404).json('no such user');
});

app.listen(3000, () => {
    console.log('app is running on port 3000.');
});