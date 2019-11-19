const signinAuthentication = (db, bcrypt) => (req, res) => {
    const { authorization } = req.headers;
    return authorization ? getAuthTokenId() :
        handleSignin(db, bcrypt, req)
            .then(data => res.json(data))
            .catch(err => res.status(400).json(err));
};

const getAuthTokenId = () => {
    return true;
}

const handleSignin = (db, bcrypt, req) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return Promise.reject('Incorrect form submission');
    }

    return db.select('email', 'hash').from('login').where('email', '=', email)
        .then(data => {
            const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
            if (isValid) {
                return db.select('*').from('users').where('email', '=', email)
                    .then(user => user[0])
                    .catch(() => Promise.reject('Unable to get user'));
            }
            else {
                Promise.reject('Wrong credentials');
            }
        })
        .catch(() => Promise.reject('Wrong credentials'));
};

module.exports = {
    signinAuthentication: signinAuthentication
};