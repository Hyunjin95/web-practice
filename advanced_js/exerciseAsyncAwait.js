global.fetch = require("node-fetch");
// Solve the below problems:

// #1) Convert the below promise into async await
// fetch('https://swapi.co/api/starships/9/')
//   .then(response => response.json())
//   .then(console.log)
const fetchStarships = async () => {
  // const data = await fetch('https://swapi.co/api/starships/9/').then(resp => resp.json());
  const resp = await fetch('https://swapi.co/api/starships/9/')
  const data = await resp.json();
  console.log(data);
}

fetchStarships();


// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...

// #3) Add a try catch block to the #2 solution in order to catch any errors.
// Now change one of the urls so you console.log your error with 'ooooooops'
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async urls => {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(async url => {
      const resp = await fetch(url);
      return resp.json();
    }));

    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  }
  catch (err) {
    console.log('ooooooops', err);
  }
  finally {
    console.log("finally");
  }
}

const getData2 = async urls => {
  try {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let resp of arrayOfPromises) {
      const data = await resp.json();
      console.log(data); 
    }
  }
  catch (err) {
    console.log('ooooooops', err);
  }
  finally {
    console.log("finally");
  }
}

getData(urls);
getData2(urls);