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

describe('Mocks and Spies', () => {
    // Mirror the promises in order to reduce a testing time.
    it('getPeopleAsync returns count and results', () => {
        const mockFetch = jest.fn().
            mockReturnValue(Promise.resolve({
                json: () => Promise.resolve({
                    count: 87,
                    results: [0, 1, 2, 3, 4, 5]
                })
            }));

        expect.assertions(4);
        return swapi.getPeoplePromise(mockFetch).then(data => {
            expect(mockFetch.mock.calls.length).toBe(1);
            expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
            expect(data.count).toEqual(87);
            expect(data.results.length).toBeGreaterThan(5);
        });
    });
});