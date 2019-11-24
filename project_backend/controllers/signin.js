const jwt = require('jsonwebtoken');
const redisClient = require('../server').redisClient;


const signinAuthentication = (db, bcrypt) => (req, res) => {
    const { authorization } = req.headers;
    return authorization ?
        getAuthTokenId(req, res)
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

const getAuthTokenId = (req, res) => {
    const { authorization } = req.headers;
    return redisClient.get(authorization, (err, reply) => {
        if (err || !reply) {
            return res.status(400).json('Unauthorized');
        }
        return res.json({
            id: reply
        });
    });
};

const createSessions = (user) => {
    const { email, id } = user;
    const token = signToken(email);
    return setToken(token, id)
        .then(() => {
            return { success: 'true', userId: id, token };
        })
        .catch(() => console.log('Error occured'));
};

const signToken = (email) => {
    const jwtPayload = { email };
    return jwt.sign(jwtPayload, process.env.JWT_KEY, { expiresIn: '2 days' });
};

const setToken = (key, value) => {
    return Promise.resolve(redisClient.set(key, value));
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
    signinAuthentication: signinAuthentication,
    createSessions: createSessions
};