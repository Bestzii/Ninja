/* Exercise 4.5 */
// 1
function sum(...args) {
    let sum = 0;
    args.forEach(function (item) {
        sum += item;
    });
    return sum;
}
let summy = sum(1,2,3,4,5);
console.log(`1. The summation is ${summy} `);

// 2
// Toyotomi, Fuma
function getSamurai(samurai) {
    "use strict"
    arguments[0] = "Ishida"; // This statement won't bind to the parameter 'samurai'
    return samurai;
}
function getNinja(ninja) {
    arguments[0] = "Fuma";
    return ninja;
}
console.log(`2.1 ${getSamurai("Toyotomi")}`);
console.log(`2.2 ${getNinja("Yoshi")}`);

// 3
// whoAmI2 is the window object
function whoAmI1() {
    "use strict";
    return this;
}
function whoAmI2() {
    return this;
}

// 4
/*
let ninja1 = {
    whoAmI: function () {
        return this;
    }
};

let ninja2 = {
    whoAmI: ninja1.whoAmI
};

let identify = ninja2.whoAmI;

assert(ninja1.whoAmI() === ninja1, "ninja1?");  //correct
assert(ninja2.whoAmI() === ninja1, "ninja1 again?"); //incorrect, it is ninja2 now
assert(identify() === ninja2, "ninja1 by identify?"); //incorrect, it is window now
assert(ninja1.whoAmI.call(ninja2) === ninja2, "ninja2 here?"); //correct


//5
function Ninja() {
    this.whoAmI = () => this;
}

let ninja1 = new Ninja();
let ninja2 = {
    whoAmI: ninja1.whoAmI
};

assert(ninja1.whoAmI() === ninja1, "ninja1 here?"); //correct
assert(ninja2.whoAmI() === ninja2, "ninja2 here?)");    //incorrect, it is still ninja1
*/

//6
function Ninja() {
    this.whoAmI = function () {
        return this;
    }.bind(this);
}

let ninja1 = new Ninja();
let ninja2 = {
    whoAmI: ninja1.whoAmI
};
assert(ninja1.whoAmI() === ninja1, "ninja1 here?"); //correct
assert(ninja2.whoAmI() === ninja2, "ninja2 here?)"); //incorrect