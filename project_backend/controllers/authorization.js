const redisClient = require('../server').redisClient;


const requireAuth = (req, res, next) => {
    const { authorization } = req.headers;
    
    if(!authorization) {
        return res.status(401).json('Unauthorized access');
    }

    return redisClient.get(authorization, (err, reply) => {
        if(err || !reply) {
            return res.status(401).json('Unauthorized access');
        }
        return next();
    })
};

module.exports = {
    requireAuth: requireAuth
};
