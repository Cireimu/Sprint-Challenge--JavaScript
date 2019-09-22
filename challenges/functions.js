// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

function consume(a, b, cb) {
  console.log(cb(a,b));
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

let add = function(a,b){
  return a + b;
}

let multiply = function(a,b){
  return a * b;
}

let greeting = function(first,last){
  return `Hello ${first} ${last}, nice to meet you!` ;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
 consume(2, 2, add); // 4
 consume(10, 16, multiply); // 160
 consume("Mary", "Poppins", greeting); // Hello Mary Poppins, nice to meet you!



// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

//nestedFunction can access the variable internal because of how it is nested inside of myFunction which holds the variable 'internal'. The nested data can always access it's parent's code, but the parent can't access it's children's data. This is all thanks to closures.

// Explanation: 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
