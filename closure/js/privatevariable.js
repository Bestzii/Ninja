function Ninja() {
    let feints = 0;
    this.getFeints =function(){
        return feints;
    };
    this.feint = function () {
        feints++;
    };
}

let ninja1 = new Ninja();
ninja1.feint();

assert(ninja1.feints === undefined, "And the private data is inaccessible to us.");
assert(ninja1.getFeints() === 1, "We can access it with accessor method");

let ninja2 = new Ninja();
assert(ninja2.getFeints() === 0, "The new ninja is created");