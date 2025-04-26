// to escape from global scope polution we use/declare iife

// Immediately Invoked Function Expressions (IIFE)

//()()

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')