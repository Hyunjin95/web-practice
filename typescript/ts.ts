// 1. boolean
let isCool: boolean = true;

// 2. number
let age: number = 56;

// 3. string
let eyeColor: string = 'brown';
let quote: string = `I'm not old, I'm only ${age}`;

// 4. Array
let pets: string[] = ['cat', 'dog', 'ant'];
let pets2: Array<string> = ['lion', 'tiger'];

// 5. object
let wizard: object = {
    a: 'John'
}

// 6. null and undefined
let und: undefined = undefined;
let nul: null = null;

// 7. Tuple
let basket: [string, number, boolean] = ['basketball', 5, true];

// 8. Enum
enum Size { Small = 1, Medium = 2, Large = 3 };
let sizeName: string = Size[2]; // Medium. (the index in enum starts from 1)
let sizeName2: number = Size.Small; // sizeName2 will be 1

// 9. Any - BE CAREFUL
let whatever: any = 'abc';
whatever = 3; 

// 10. void
let sing = (): void => {
    console.log('lalala');
}

// 11. never
let error = (): never => {
    throw Error('oops');
}