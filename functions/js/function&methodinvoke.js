function whatsMyContext(){ return this; }
/* This will return 'window' object */
let getMyThis = whatsMyContext;
/* This also returns 'window' object when called e.g. getMyThis(); */
let ninja1 = { getMyThis: whatsMyContext };
ninja1.getMyThis();
/* This will return ninja1 as the context 'this' */
let ninja2 = { getMyThis: whatsMyContext};
ninja2.getMyThis();
/* return ninja2 */