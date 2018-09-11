//For invoking functions as a constructor, we use the keyword 'new' to implement
function Ninja(){
    this.skulk = function () {
        return this;
    };
}

let ninja1 = new Ninja();
let ninja2 = new Ninja();
// Calling Ninja functions as a constructors

ninja1.skulk(); //Return ninja1

let puppet = { rules: false };

function Emperor() {
    this.rules = true;
    return puppet;
}

let emperor = new Emperor();
// emperor is puppet now

if(emperor === puppet) { console.log("The emperor is a puppet!")}
if (emperor.rules === false) { console.log("The puppet doesn't know how to rule!") }
/* is 'false' because the puppet is the returned value of the Emperor object
Hence, the new expression called by Emperor object constructor will also return puppet object
and its value(s).
 */