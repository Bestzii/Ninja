/* 'apply' and 'call' methods are used to 'invoke a function and to explicitly specify any object we want
as the function context
    - apply(object, array of arguments)
    - call(object, list of arguments)
 */
function juggle() {
    let result = 0;
    for (let n = 0; n < arguments.length; n++){
        result += arguments[n];
    }
    this.result = result;
}

let ninja1 = {};
let ninja2 = {};

juggle.apply(ninja1, [1,2,3,4]);
juggle.call(ninja2, 5,6,7,8);

if(ninja1.result === 10) {console.log("Cool! the 'apply' method works.");}
if(ninja2.result === 26) {console.log("Great! The 'call' method works.");}