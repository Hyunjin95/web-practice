const jwt = require('jsonwebtoken');


const signinAuthentication = (db, bcrypt) => (req, res) => {
    const { authorization } = req.headers;
    return authorization ?
        getAuthTokenId()
        :
        handleSignin(db, bcrypt, req)
            .then(data => {
                if (data.id && data.email) {
                    return createSessions(data)
                }
                else {
                    return Promise.reject(data);
                }
            })
            .then(session => res.json(session))
            .catch(err => res.status(400).json(err));
};

const getAuthTokenId = () => {
    return true;
};

const createSessions = (user) => {
    const { email, id } = user;
    const token = signToken(email);
    return { success: 'true', userId: id, token };
};

const signToken = (email) => {
    const jwtPayload = { email };
    return jwt.sign(jwtPayload, process.env.JWT_KEY, { expiresIn: '2 days' });
};

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