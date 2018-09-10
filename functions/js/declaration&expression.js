function myFunctionDeclaration(){
    function innerFunction(){};
}

let myFunc = function() {};
myFunc(function () {
    return function(){};
});

(function namedFunctionExpression(){})();

/* Other ways to implement IIFE */
+function(){}();
-function(){}();
!function(){}();
!function(){}();