const fetch = require('node-fetch');
const swapi = require('./script2.js');

// The below is one way of testing async functions.
describe('getPeopleAsync', () => {
    it('calls swapi to get people', (done) => {
        expect.assertions(1);
        swapi.getPeopleAsync(fetch).then(data => {
            expect(data.count).toEqual(87);
            done();
        });
    });
});

// The below is another and more common way of testing async functions.
describe('getPeoplePromise', () => {
    it('calls swapi to get people', () => {
        expect.assertions(2);
        return swapi.getPeoplePromise(fetch).then(data => {
            expect(data.count).toEqual(87);
            expect(data.results.length).toBeGreaterThan(5);
        });
    });
});