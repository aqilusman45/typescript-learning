// scoping and assignment in typescript
// ts checks redeclarations with either let or const

let x = 20;

// const x = 21; cannot redeclare
// let x = 21: cannot redeclare

// variables with let keyword can be declared without initialization
// variables with const keyword cannot be declared without initialization
// use cases for let and const
// if you want to assign somthing that may change or is dynamically generated
// we use let

// if you want to assign something that should not change we must use const 

let y; //no error
// const o; give error

// Data types


// BOOLEAN
let isDisabled: boolean = true;
isDisabled = false;


// numbers
let total: number = 3;

//string

let myName: string = 'usman';

// template strings
let sentence: string = `my name is ${myName}`;

//null 
let n: null = null;
let isNew: boolean | null = null;

// undefined 
let u: undefined = undefined;


// arrays
//syntax one 
let list: number[] = [1, 2 , 3];

//sytax two
let newList : Array<number> = [1, 2, 3]

// tuple type
// tuple also defines the space in the list
// we cannot assign more than the limit
let myList : [number, string, boolean] = [1, 'usman', true]
// let myList : [number, string, boolean] = [1, 'usman', true, 'string'] // WRONG APPROACH

// enums
// there are three types of enums
// numeric enum
// string enum 
// hetero enum

//NUMERIC ENUM
enum Vehicle {
    Car,
    Truck,
    Jeep
}

let type: Vehicle = Vehicle.Car;

console.log(type); // output 1

// we can also assign index numbers to enum
enum Book {
    Notebook = 2, // assigned index number will increment for the next value from that number
    Textbook = 5, // here if no value was assigned the index would have been 3 , but as we have assigned its 5
    Dairy // similarly it would have been 4, but now it is 5++ that is 6
}

let book: Book = Book.Dairy; 

console.log(book); // output 6


// Enums as return type (string enums)

 enum Animals {
     CAT = 'TOM',
     MOUSE = 'STUART',
     DOG = 'MAX',
 }

 // accessing string from enum
 // dot notation 
console.log(Animals.CAT);
 // Square Bracket Notation
console.log(Animals['MOUSE']);

 //ENUM as return type
const myPet = (cat:boolean) : Animals | null =>  {
            if(cat){
                return Animals.CAT;
            }else{
                return null
            }
}


let pet : Animals | null = myPet(true);

console.log(pet);

// ANY  type for dynamic values

let randomValue : any;

randomValue = 23; // no error

randomValue = 'usman' // no error

// Problem with type any
// we can use randomValue as any thing for example
// as function
        // randomValue();
// as object 
        // randomValue.name
// as string
        // randomValue.toUpperCase(); 
// typescript compiler wont give any error;


// to tackle this we use type Unknown
/// Unknown TYPE

let someValue : unknown;

//error is thrown here. to tackel these error we use type assertion
// type assertion syntax one ALIAS



// creating user defined type guard

// in this function we will check if object has name property or not
function hasName(obj: any): obj is {name :string}{
    return !!obj && typeof obj === 'object' && 'name' in obj;
}


let myNewVar: unknown;
myNewVar = "titus";


console.log((myNewVar as string).indexOf('i'));

 

if (hasName(someValue)) {
        console.log(someValue);
}


// syntax two
someValue = 'usman';
console.log((<string> someValue ).toUpperCase());


// when we just deckare a variable 
// its type is automatically set to any

let _c; // no errors

_c = 20;
_c = true


// but we initialize a variable on declaration it gives errors
 
let _e = 20; // now the type is set to number

// _e = false // this gives errors as we cannot change data type

// multitype variable or union type
let multitype : number | string | boolean;

multitype = 3;

multitype = "string";

multitype = true;







