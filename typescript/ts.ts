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

// interface
interface RobotArmy {
    count: number,
    type: string,
    magic?: string // optional property
};

let fightRobotArmy = (robot: RobotArmy): RobotArmy => {
    const duplicatedRobot = { ...robot, type: 'fight' };
    return duplicatedRobot;
};

// This function is exactly the same as the one above
let fightRobotArmy2 = (robot: {count: number, type: string, magic: string}): RobotArmy => {
    const duplicatedRobot = { ...robot, type: 'fight' };
    return duplicatedRobot;
};

// type
type RobotArmyType = {
    count: number,
    type: string,
    magic: string
};

let fightRobotArmyType = (robot: RobotArmy): RobotArmy => {
    const duplicatedRobot = { ...robot, type: 'fight' };
    return duplicatedRobot;
};


// Type Assertion
interface Cat {
    count: number,
    name: string
};

let dog = {} as Cat;
dog.count = 3;


// Function
let fightRobotArmy3 = (robot: RobotArmy): RobotArmy => {
    const duplicatedRobot = { ...robot, type: 'fight' };
    return duplicatedRobot;
};

let fightRobotArmy4 = (robot: RobotArmy): void => {
    const duplicatedRobot = { ...robot, type: 'fight' };
};

let fightRobotArmy6 = (robot: RobotArmy): number => {
    const duplicatedRobot = { ...robot, type: 'fight' };
    return 3;
};


// Class
class Animal {
    private sing: string = 'lalala';

    constructor(sound: string) {
        this.sing = sound;
    }

    greet() {
        return `Hello, ${this.sing}`;
    }
}

let lion = new Animal('raawwr');
lion.greet();


// Union
let confused: string | number | boolean = 3;
confused = 'a';
confused = true;

let x = 4;
// x = 'hello'; - TypeScript can detect this error.