const googleSearch = require('./script.js');

dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
];

it('this is a test', () => {
    googleSearch('cat', dbMock);
});