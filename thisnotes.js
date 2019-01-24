//'This' is a pronoun, used in place of an object and it gives you access to an objects context

//There are 4 principles that "clue us in" to what will be 'This'

//Global/Window Binding
//"In the global scope, the value of 'this' will be the window/console Object" In this case, our window/console object is a function

function sayName(name) {
    console.log(this); //in this context, 'This' refers to the function sayName
    return name;
}

sayName("Global/Window Binding")

//Implicit Binding
//"Whenever a function is called by a preceding dot, the object left of the dot becomes 'this'"
//tl;dr: If its left of the dot, its can be called with 'this'

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) { //a property whos value is a function is refered to as a Method

        console.log(`${this.greeting} my name is ${name}`); //'this' is pointing to the inside of our object, in this context calling this.greeting is the same as calling myObj.greeting

        console.log(this); //this console.log will output the contents of myObj
    }
};

myObj.sayHello('Ekko');

//New Binding
//"Whenever a constructor function is used (new), 'This' refers to the specific instance of the object that is created and returned by the constructor function"

function CordialPerson(greeter) { //capitalize constructor functions
    this.greeting = 'Hello '; //'This' refers to the object that will be greated when we call CordialPerson with the 'New' keyword
    this.greeter = greeter; 
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const jerry = new CordialPerson('Newman'); //The new keyword constructs a new object
const newman = new CordialPerson('Jerry');

console.log(CordialPerson.length)

// jerry.speak();
// newman.speak();

//Explicit Binding
//continuing from above code

//Any time you use .'bind' you overwrite what 'This' points to
jerry.speak.call(newman); //Now points to jerry
newman.speak.apply(jerry); //Now points to newman

//Call & Apply, Are they interchangable? When should I use call and when should I use apply?
//Test 1: Changing them both to .apply does not break function
//Test 2: Swapping them does not break function
//Test 3: Changing them both to .call does not break function
//--From Stackoverflow--
// The difference is that apply lets you invoke the function with arguments as an array; call requires the parameters be listed explicitly. A useful mnemonic is "A for array and C for comma."
// Pseudo syntax:
// theFunction.apply(valueForThis, arrayOfArgs)
// theFunction.call(valueForThis, arg1, arg2, ...)
// ¯\_(ツ)_/¯

