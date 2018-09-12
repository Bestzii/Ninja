let outerValue = "samurai";
let later;

function outerFunction() {
    let innerValue = "ninja";

    function innerFunction() {
        assert(outerValue === "samurai", "Found samurai");
        assert(innerValue === "ninja", "Found ninja");
    }
    later = innerFunction;
}
outerFunction();
later();