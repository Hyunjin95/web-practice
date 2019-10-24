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
