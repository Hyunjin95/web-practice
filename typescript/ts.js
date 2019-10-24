var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 1. boolean
var isCool = true;
// 2. number
var age = 56;
// 3. string
var eyeColor = 'brown';
var quote = "I'm not old, I'm only " + age;
// 4. Array
var pets = ['cat', 'dog', 'ant'];
var pets2 = ['lion', 'tiger'];
// 5. object
var wizard = {
    a: 'John'
};
// 6. null and undefined
var und = undefined;
var nul = null;
// 7. Tuple
var basket = ['basketball', 5, true];
// 8. Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var sizeName = Size[2]; // Medium. (the index in enum starts from 1)
var sizeName2 = Size.Small; // sizeName2 will be 1
// 9. Any - BE CAREFUL
var whatever = 'abc';
whatever = 3;
// 10. void
var sing = function () {
    console.log('lalala');
};
// 11. never
var error = function () {
    throw Error('oops');
};
;
var fightRobotArmy = function (robot) {
    var duplicatedRobot = __assign(__assign({}, robot), { type: 'fight' });
    return duplicatedRobot;
};
// This function is exactly the same as the one above
var fightRobotArmy2 = function (robot) {
    var duplicatedRobot = __assign(__assign({}, robot), { type: 'fight' });
    return duplicatedRobot;
};
var fightRobotArmyType = function (robot) {
    var duplicatedRobot = __assign(__assign({}, robot), { type: 'fight' });
    return duplicatedRobot;
};
;
var dog = {};
dog.count = 3;
// Function
var fightRobotArmy3 = function (robot) {
    var duplicatedRobot = __assign(__assign({}, robot), { type: 'fight' });
    return duplicatedRobot;
};
var fightRobotArmy4 = function (robot) {
    var duplicatedRobot = __assign(__assign({}, robot), { type: 'fight' });
};
var fightRobotArmy6 = function (robot) {
    var duplicatedRobot = __assign(__assign({}, robot), { type: 'fight' });
    return 3;
};
// Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello, " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('raawwr');
lion.greet();
// Union
var confused = 3;
confused = 'a';
confused = true;
var x = 4;
// x = 'hello'; - TypeScript can detect this error.
