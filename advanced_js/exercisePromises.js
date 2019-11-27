// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

function promise_func() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 4000);
  });
}

// #2) Run the above promise and make it console.log "success"
promise.then(console.log);
promise_func().then(console.log);

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise2 = Promise.resolve(
  setTimeout(() => {
    console.log("success2");
  }, 4000)
);

const promise_func2 = (num) => {
  if (num === 1) {
    return Promise.resolve(true);
  }
  else if (num === 0) {
    return Promise.reject("0 is not a natural number");
  }
  else {
    return Promise.resolve(false);
  }
};

promise2.then(console.log);
promise_func2(1).then(console.log);
promise_func2(2).then(console.log);
promise_func2(0).catch((err) => console.log(err));

const printNumber = async () => {
  try {
    const sayTrue = await promise_func2(1);
    const sayFalse = await promise_func2(2);
    const whathappens = await promise_func2(0);
  
    console.log("true", sayTrue);
    console.log("false", sayFalse);
    console.log(whathappens);
  }
  catch (e) {
    console.log(e);
  }
};

printNumber();


// #4) Catch this error and console log 'Ooops something went wrong'
// Promise.reject('failed')
//   .catch(console.log("Oops something went wrong;"));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

global.fetch = require("node-fetch");

Promise.all(urls.map(url =>
  fetch(url).then(people => people.json())
))
.then(array => {
  console.log('1', array[0])
  console.log('2', array[1])
  console.log('3', array[2])
  console.log('4', array[3])
})
.catch(err => console.log('ughhhh fix it!', err));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

