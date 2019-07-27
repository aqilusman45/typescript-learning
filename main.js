//first we need to install typescript cli
// then we will create a ts file
// "tsc" that is ts compiler transpiles ts files into js files
//every js code is valid ts code
//we use interfaces in ts
//every parameter passed must also have its type
function message(msg) {
    console.log(msg);
    return msg;
}
// Const decleration must also be initialized
// const mymessage: string; wrong
var myMessage = "Usman"; //correct with type anotation
// declarations with let dont need to be initialzed, same with var
var newMessage;
newMessage = "New String";
message(myMessage);
//Scoping for var and let
// function doSomething() {
//   for (let i = 0; i < 5; i++) {
//     // let is just in this block of for
//     console.log(i);
//   }
//   console.log("Finally" + i); //this will give error as let i is not available in this block
//however this will still be transpiled
// }
// doSomething();
// function newDoSomething() {
//   for (var i = 0; i < 5; i++) {
//     // let is just in this block of for
//     console.log(i);
//   }
//   console.log("Finally" + i); // errors gone as var i is available
//   //however this will still be transpiled
// }
// doSomething();
// types on initialization
var number = 5;
// number = "a"; // there is an error, as a string cant assigned to variable with type number;
// this will help eradicate errors in future
// also to avoid this we use anotations
// for example
var newNum = 3;
newNum = 2;
// IF WE dont know the type of the variable for that moment
// that is why we use type anotations
// it can be done like this
// following are the data types in typescript
var a;
var b;
var c;
var d;
var e;
var f = [1, 2, 3];
var g = [false, "2", 2, true];
// enums, group of related constants:
//ts specific
// in vanila js we would do
var colorRed = 1;
var colorYellow = 2;
var colorBlue = 3;
//enums automatically assigns index numbers to the constants present in enum
//however best practices suggest we do it manually for future references
var Color;
(function (Color) {
    Color[Color["Purple"] = 0] = "Purple";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Yellow"] = 2] = "Yellow";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
//type assertions
//what if we dont declare a var with type annotation
//like
var assertMessage;
// now if you hover on the declaration you would get type:any
assertMessage = "Usman";
//because of whice there wont be any intelisense available for it
// that is why we use type assertions
//first method using angle brackets. Popular approach
var endsWithN = assertMessage.endsWith("n");
//second method using "as" keyword
var endsWithNewWay = assertMessage.endsWith("w");
console.log(endsWithN, endsWithNewWay);
//lambda functions or arrow functions
// functions expression with es5 syntax
var logger = function (message) {
    console.log(message);
};
//arrow or lambda functions multiline
var newLogger = function (message) {
    console.log(message);
};
//arrow functions single line with single parameter
var newerLogger = function (message) { return logger(message); };
//interfaces
//many times we require functions with several parameters
//First approach
//create fuctions that takes values as parameters
var drawpoint = function (x, y, z) {
    console.log(x, y, z);
};
//second approach
//pass an object as parameter
var drawpoint1 = function (point) {
    // too verbose
    console.log(point.x, point.y, point.z);
};
//problem here is that we can pass object with any property
// example
// let pointObject = {
//     name : "usman"
// }
// passing this object as argument will not give any compiletime error
// so we must use type annotations as mentioned on line 145
var pointObject = {
    x: 1,
    y: 2,
    z: 3
};
drawpoint1(pointObject);
// now we can use this interface as type of our
// parameters
function createBox(box) {
    console.log("Box is made of " + box.material);
    console.log("It has " + box.side + " sides");
}
// createBox({
//     material: 'card',
//     side: 4
// })
// Cohesion in programming
// When we have functions, interfaces and objects that highly related to eachother
// we make sure they are in one unit
// so in our scenerio we will make a class for boxes
// Classes
//for this parametric constructors in this approach we are using a verbose
// method
var Box = /** @class */ (function () {
    // constructor(material: string, side: number){
    function Box(material, side) {
        var _this = this;
        this.boxOpen = function () {
            console.log(_this.side);
        };
        this.boxClose = function () {
            console.log(_this.material);
        };
        // optional parameter
        this.material = material;
        this.side = side;
    }
    return Box;
}());
//creating a class in using new keyword
var box = new Box("Card");
console.log(box.material);
box.boxOpen();
// ACCESS MODIFIERS
// there are three types of access modifiers "public" , "protected", "private"
// in this approach we will use a shorthand to initialise class feilds/members
// we will declare and pass members as parameters in constructors
var Point = /** @class */ (function () {
    // constructor(material: string, side: number){
    function Point(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.drawPoint = function () {
            console.log(_this.y);
        };
        this.findDistance = function () {
            console.log(_this.x);
        };
        // getters and setters for private members
        this.setX = function (value) {
            if (value < 0) {
                throw new Error("Value cannot be less than 0");
            }
            _this.x = value;
        };
        this.getX = function () {
            return _this.x;
        };
        this.setY = function (value) {
            if (value < 0) {
                throw new Error("Value cannot be less than 0");
            }
            _this.x = value;
        };
        this.getY = function () {
            return _this.x;
        };
        // optional parameter
        // this.x = x; // we dont need this either
        // this.y = y; // we dont need this either
    }
    return Point;
}());
var point = new Point(3, undefined);
// point.
console.log(point.getX());
point.setX(23);
console.log(point.getX());
// set
//https://medium.com/@rossbulat/typescript-generics-explained-15c6493b510f
//https://medium.com/@wittydeveloper/typescript-generics-and-overloads-999679d121cf
//https://www.typescriptlang.org/docs/handbook/generics.html
// https://www.typescriptlang.org/docs/handbook/functions.html
//Generics
// class Box <MyBox>{
//   material: MyBox;
//   side: MyBox;
//   constructor(material: MyBox, side: MyBox){
//       this.material = material;
//       this.side = side;
//   }
//     boxOpen = ()=>{
//       console.log(this.side);
//     }
//     boxClose = ()=>{
//       console.log(this.material);
//     }
// }
