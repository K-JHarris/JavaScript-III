/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window Binding - ...The one you're using: 'This' keyword in the global scope will be.. basically whatever its nested inside, as far as I gather

* 2. Implicit Binding - It's Implied: Whenever a function is called with a ., whatevers to the left of the . will be 'this'

* 3. New Binding - The things we just made: When we use a constructor function to make an object 'this' is refering to the specific instance of the object that the function returned

* 4. Explicit Binding - When you're feeling picky: Explicit binding lets us *explicitly* tell Javascript what we want 'this' to refer to
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function Jump(name) {
    this.jumper = name; //This refers to the function Jump
    console.log(this.jumper + " Opened their parachute and landed safely!")
}

Jump('Dwayne Johnson')


// Principle 2

// code example for Implicit Binding
const wishes = {
    //♫ https://www.youtube.com/watch?v=SHAvkktP928 ♫
    initiator: 'I wish I ',
    wish1: 'was a little bit taller ' ,
    wish2: 'was a baller ',
    wish3: 'had a girl who looked good, I would call he.r',
    makeWishes: function(){
        console.log(`${this.initiator + this.wish1 + this.initiator + this.wish2 + this.initiator + this.wish3}`);
        // I could probably make a loop for this? but im pressed for time and i should probably stop messing around
        // console.log(this);
    }
}

wishes.makeWishes()

// Principle 3

// code example for New Binding
function theOneAndGlorious(name) {
    // ♫ https://www.youtube.com/watch?v=_mG7VyBSjq0 ♫
    this.introduction = 'My name is ';
    this.name = name;
    this.introduce = function() {
        console.log(this.introduction + this.name + " ");
        console.log(this);
    }
}

const gonnaBeTheLastOfUs = new theOneAndGlorious('Noctorious')
const imposter = new theOneAndGlorious('imposter')

// gonnaBeTheLastOfUs.introduce();


// Principle 4

// code example for Explicit Binding
// assuming the same code from above

gonnaBeTheLastOfUs.introduce.call(imposter)