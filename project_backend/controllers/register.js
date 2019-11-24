const signin = require('./signin');


const handleRegister = (db, bcrypt) => (req, res) => {
    const { email, name, password } = req.body;
    const hash = bcrypt.hashSync(password, 10);

    if (!email || !name || !password) {
        res.status(400).json('Incorrect form submission');
        return;
    }

    db.transaction(trx => {
        trx('login').insert({
            hash: hash,
            email: email
        })
            .returning('email')
            .then(loginEmail => {
                return trx('users').insert({
                    email: loginEmail[0],
                    name: name,
                    joined: new Date()
                })
                    .returning('*')
                    .then(user => signin.createSessions(user[0]))
                    .then(session => res.json(session));
            })
            .then(trx.commit)
            .catch(trx.rollback)
    })
        .catch(() => res.status(400).json('Unable to register'));
};

module.exports = {
    handleRegister: handleRegister  
};