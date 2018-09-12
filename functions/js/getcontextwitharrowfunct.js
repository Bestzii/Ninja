function Button(){
    this.clicked =false;
    this.click = function () {
        this.clicked = true;
        if(button.clicked){console.log("The button has been clicked");}
    };   /* ^ this will cause an error because the function context isn't bound
               the 'button' object instance.
        */
}
let button = new Button();
let elemt = document.getElementById("test");
elemt.addEventListener("click",button.click);

////////////////////////////////////////////
/* To fix this */
function Button(){
    this.clicked =false;
    this.click = () => {
        this.clicked = true;
        if(button.clicked){console.log("The button has been clicked");}
    };   /* ^ this expression is fixed because the arrow function will refer the 'this'
               at the time it is called.
            */
}
// call the same statements again
button = new Button();
elemt = document.getElementById("test");
elemt.addEventListener("click",button.click);   // at this time the arrow function will use
// button as its function context ('this')
////////////////////////////////////////////

/* However, the object literal notation can't be used with arrow function to refer the function
context at a time.
 */
