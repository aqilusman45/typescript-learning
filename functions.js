// defining a function with types
// param1        param2     return type
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// add (3, '10') cannot be passed
// intelliscene support 
// shows a tooltip telling arguments and return type
//  here all params are required
add(23, 43);
// optional parameters
// here optional parameters will always be declared after requierd params
// so all the optional parameter are after required
// not following this sequence will give errors
function sub(num1, num2, num3) {
    if (num3 === undefined) {
        return num1 + num2;
    }
    else {
        return num1 + num2 + num3;
    }
}
console.log(sub(1, 3));
console.log(sub(1, 3, undefined));
// default parameters
// these are same as optional parameters but with a dfault value
// if you dont pass an argument it will pick up default value
function doubleYourNum(num1, num2) {
    if (num2 === void 0) { num2 = 2; }
    return num1 * num2;
}
console.log(doubleYourNum(3, 3));
function adder(a, b) {
    return a + b;
}
console.log(adder('hello ', 'usman'));
console.log(adder(1, 3));
console.log(adder('hello ', 3)); // this gives error as not overload uses sting and number together
