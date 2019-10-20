const googleSearch = require('./script.js');

dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
];

describe('googleSearch', () => {
    it('just check if this works correctly', () => {
        expect('hello').toBe('hello');
    });
    
    it('basic tests', () => {
        expect(googleSearch('cat', dbMock)).toEqual([]);
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
    });
    
    it('undefined and null inputs', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });
    
    it('not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    });
});
