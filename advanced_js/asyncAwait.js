global.fetch = require("node-fetch");

/*
fetch(url)
    .then(resp => resp.json())
    .then(console.log);
*/
async function fetchUsers(url) {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
}

fetchUsers('https://jsonplaceholder.typicode.com/users');

/*
Promise.all(urls.map(url => {
    return fetch('url').then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'));
*/
const getData = async function(urls) {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => {
            return fetch(url).then(resp => resp.json());
        }));

        console.log(users);
        console.log(posts);
        console.log(albums);
    }
    catch (err) {
        console.log('error', err);
    }
    finally {
        console.log("finally");
    }
}

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]
getData(urls);