// #### 1. Multiply - Function Declaration
// * Create a function that multiples a number by another number.

function myMultiple(nr1, nr2) {
  console.log("Q1:The sum is", nr1 * nr2);
}

myMultiple(8, 5);
console.log("-----------------------------------------------------");
// #### 2. Multiply - Function Declarations as Values
// * Rework the syntax of the above function so that the function declaration is stored as a value.

const myMultiple1 = function (nr1, nr2) {
  console.log("Q2:The sum is", nr1 * nr2);
};

myMultiple1(8, 5);
console.log("-----------------------------------------------------");

// #### 3. Multiply - Arrow Function
// * Rework the syntax of the function declaration so that it uses the arrow function shorthand.

const myMultipleArrow = (nr1, nr2) => {
  console.log("Q3:The sum is", nr1 * nr2);
};

myMultipleArrow(54, 46);

console.log("-----------------------------------------------------");

// #### 4. Declarations

// - Create functions (using all three declarations) to check the remainder of division given two numbers.

// FUNCTION DECLARATION

function myRemainder(nr1, nr2) {
  console.log("Q4a:The remainder is", nr1 % nr2);
}
myRemainder(64, 8);

// FUNCTION DECLARATION AS VALUE

const myRemainder1 = function (nr1, nr2) {
  console.log("Q4b:The remainder is", nr1 % nr2);
};

myRemainder1(54, 46);

const myRemainderArrow = (nr1, nr2) => {
  console.log("Q4c: The remainder is", nr1 % nr2);
};

myRemainderArrow(60, 7);
