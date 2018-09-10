// Old version
function performAction(ninja, action){
    /* 'typeof' operator returns the type of the parameter which is indicated on the right side
    In this case, "undefined" is a String type. Then, it will returns the String 'undefined'.
     */
    action = typeof action === "undefined" ? "skulking" : action;
    return ninja + " " + action;
}

// New version
function performActionES6(ninja, action = 'skulking'){
    return ninja + " " + action;
}
