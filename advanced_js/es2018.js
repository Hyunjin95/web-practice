const animals = {
    tiger: 25,
    lion: 5,
    monkey: 2,
    bird: 3,
};
const { tiger, lion, ...rest } = animals;

const objectSpread = (p1, p2, p3) => {
    console.log(p1);
    console.log(p2);
    console.log(p3);
};
objectSpread(tiger, lion, rest);

const array = [1, 2, 3, 4, 5];
const sum = (a, b, c, d, e) => {
    return a+b+c+d+e;
};
console.log(sum(...array));


