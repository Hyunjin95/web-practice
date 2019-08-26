const Clarifai = require('clarifai');
const app = new Clarifai.App({apiKey: process.env.API_CLARIFAI});


const handleApiCall = () => (req, res) => {
    const { input } = req.body;

    app.models.initModel({id: Clarifai.FACE_DETECT_MODEL})
        .then(faceDetectModel => faceDetectModel.predict(input))
        .then(data => res.json(data))
        .catch(() => res.status(400).json('Unable to work with API'));
}

const handleImage = db => (req, res) => {
    const { id } = req.body;
    
    db('users').where('id', '=', id).increment('entries', 1)
        .returning('entries')
        .then(entries => res.json(entries[0]))
        .catch(() => res.status(400).json('Unable to get entries'));
};


module.exports = {
    handleImage: handleImage,
    handleApiCall: handleApiCall
}