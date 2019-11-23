const redisClient = require('../server').redisClient;


const handleSignout = () => (req, res) => {
    const { authorization } = req.headers;

    if (authorization) {
        return redisClient.DEL(authorization, (err, reply) => {
            if (err || !reply) {
                return res.status(400).json('Fail to signout');
            }
            return res.json('success');
        });
    }

    return res.status(400).json('Fail to signout');
};

module.exports = {
    handleSignout: handleSignout
};