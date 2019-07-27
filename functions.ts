// defining a function with types

                // param1        param2     return type
function add(num1:number , num2: number): number {
        return num1 + num2;
}

add(5, 10);
// add (3, '10') cannot be passed

// intelliscene support 
// shows a tooltip telling arguments and return type


//  here all params are required
add(23, 43)


// optional parameters
// here optional parameters will always be declared after requierd params
// so all the optional parameter are after required
// not following this sequence will give errors
function sub(num1:number , num2:number, num3?: number): number {
    if (num3 === undefined) {
        return num1 + num2;
    }else{
        return num1 + num2 + num3;        
    }
}


console.log(sub(1, 3));

console.log(sub(1, 3, undefined));


// default parameters
// these are same as optional parameters but with a dfault value
// if you dont pass an argument it will pick up default value
function doubleYourNum(num1: number, num2: number = 2): number {
        return num1 * num2;
}

console.log(doubleYourNum(3,3 ));


// function overloading

function adder(a: string, b: string): string;

function adder(a:number, b: number): number;

function adder(a:string, b: number): number;

function adder(a:any , b: any): any {
        return a + b;
}

console.log(adder('hello ', 'usman'));
console.log(adder(1 , 3));
console.log(adder('hello ', 3)); // this gives error as not overload uses sting and number together



