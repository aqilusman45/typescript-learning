//first we need to install typescript cli
// then we will create a ts file
// "tsc" that is ts compiler transpiles ts files into js files
//every js code is valid ts code
//we use interfaces in ts
//every parameter passed must also have its type

function message(msg: string) {
  console.log(msg);
  return msg;
}

// Const decleration must also be initialized
// const mymessage: string; wrong

const myMessage: string = "Usman"; //correct with type anotation

// declarations with let dont need to be initialzed, same with var
let newMessage: string;

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
let number = 5;
// number = "a"; // there is an error, as a string cant assigned to variable with type number;
// this will help eradicate errors in future

// also to avoid this we use anotations
// for example

let newNum: number = 3;
newNum = 2;

// IF WE dont know the type of the variable for that moment
// that is why we use type anotations
// it can be done like this

// following are the data types in typescript
let a: number;
let b: null;
let c: string;
let d: void;
let e: any;

let f: number[] = [1, 2, 3];

let g: any[] = [false, "2", 2, true];

// enums, group of related constants:
//ts specific

// in vanila js we would do

const colorRed = 1;
const colorYellow = 2;
const colorBlue = 3;

//enums automatically assigns index numbers to the constants present in enum
//however best practices suggest we do it manually for future references
enum Color {
  Purple = 0,
  Red = 1,
  Yellow = 2,
  Blue = 3
}

let backgroundColor = Color.Red;

//type assertions
//what if we dont declare a var with type annotation
//like
let assertMessage;
// now if you hover on the declaration you would get type:any
assertMessage = "Usman";

//because of whice there wont be any intelisense available for it
// that is why we use type assertions

//first method using angle brackets. Popular approach
let endsWithN = (<string>assertMessage).endsWith("n");

//second method using "as" keyword

let endsWithNewWay = (assertMessage as string).endsWith("w");

console.log(endsWithN, endsWithNewWay);

//lambda functions or arrow functions

// functions expression with es5 syntax

let logger = function(message: string) {
  console.log(message);
};

//arrow or lambda functions multiline
let newLogger = (message: string) => {
  console.log(message);
};

//arrow functions single line with single parameter
let newerLogger = (message: string) => logger(message);

//interfaces

//many times we require functions with several parameters
//First approach

//create fuctions that takes values as parameters
let drawpoint = (x: number, y: number, z: number) => {
  console.log(x, y, z);
};

//second approach
//pass an object as parameter
let drawpoint1 = (point: { x: number; y: number; z: number }) => {
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

let pointObject = {
  x: 1,
  y: 2,
  z: 3
};

drawpoint1(pointObject);

// third approach use an interface
// an interface is the boundaries that can be defined for an object
// in terms of that object/class behavior aka methods and attributes aka propeties/feilds
// but it does not define how the behaviour/action is being performed by the object/class
// that is something that will vary from object to object

// interface is defined as given below in typescript
interface MyBox {
  material: string | undefined; // now there can be many boxes in the world
  side: number | undefined; // but all of them will have the same properties
  boxOpen: () => void;
  boxClose: () => void;
}

// now we can use this interface as type of our
// parameters

function createBox(box: MyBox) {
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
class Box implements MyBox {
  material: string | undefined;
  side: number | undefined;
  // constructor(material: string, side: number){
  constructor(material?: string, side?: number) {
    // optional parameter
    this.material = material;
    this.side = side;
  }
  boxOpen = () => {
    console.log(this.side);
  };
  boxClose = () => {
    console.log(this.material);
  };
}

//creating a class in using new keyword

let box: MyBox = new Box("Card");

console.log(box.material);
box.boxOpen();

// ACCESS MODIFIERS
// there are three types of access modifiers "public" , "protected", "private"
// in this approach we will use a shorthand to initialise class feilds/members
// we will declare and pass members as parameters in constructors
class Point {
  // constructor(material: string, side: number){
  constructor(private x?: number, protected y?: number) {
    // optional parameter
    // this.x = x; // we dont need this either
    // this.y = y; // we dont need this either
  }

  drawPoint = () => {
    console.log(this.y);
  };

  findDistance = () => {
    console.log(this.x);
  };

  // getters and setters for private members
  setX = (value: number) => {
    if (value < 0) {
      throw new Error("Value cannot be less than 0");
    }
    this.x = value;
  };

  getX = () => {
    return this.x;
  };

  setY = (value: number) => {
    if (value < 0) {
      throw new Error("Value cannot be less than 0");
    }
    this.x = value;
  };

  getY = (): number | undefined => {
    return this.x;
  };

}
let point = new Point(3, undefined);
// point.
console.log(point.getX());
point.setX(23)
console.log(point.getX());


// PROPERTIES IN A CLASS 
class Shape {
  
  constructor(private _sides?:number){}

  public get sides() : number | undefined {
    return this._sides
  }

  // for making this feild non editabel we can remove setter
  public set sides(v : number | undefined) {
    this._sides = v;
  }
}

// now the properties will act as feilds

const square = new Shape();

square.sides = 4;

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
