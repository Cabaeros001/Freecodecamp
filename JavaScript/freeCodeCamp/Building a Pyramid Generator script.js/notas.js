
// declarar variable y darle un valor
let character = 'Hello';
// print the JS output, imprimiria "Hello"
console.log(character);
// cambiar valor de una variable, ahora el valor de chacarcter pasaria a ser "World"
character = "World";
// otra vez print output, imprimiria "World"
console.log(character);
// variables de más de una palabra, la primera palabra en minuscula, las siguientes con la incial en mayuscula, sin espacios.
let secondCharacter;
secondCharacter = "Test";
secondCharacter = character;
console.log(secondCharacter);

// Operaciones matematicas basicas 
// una variable con un número no necesita quotes
let count = 8;
// imprimimos
console.log(count + 1);
console.log(count - 1);
console.log(count * 1);
console.log(count /1);

// -Arrays (matrices)
// -is a non-primitive data type that can hold a series of values.
// -Differ from primitive data types in that they can hold more complex data
// -Primitive data types like strings and numbers can only hold one value at a time
// -Arrays are denoted using square brackets ([]). Here is an example of a variable with the value of an  empty array: let array = [];
// -Values, or elements are separated by commas.
let rows = ["Naomi", "Quincy", "CamperChan"];

// You can access the values inside an array using the index of the value. index represents the position of the value in the array, starting from 0 for the first value.
// this declaration prints "Naomi"
 console.log(rows[0]);

//  Arrays are special in that they are considered mutable. This means you can change the value at an index directly.
// this code would assign the number 10 to the third element in the array:
rows[2] = 10;
console.log(rows);
// you may not know how many elements are in an array when you want the last one.
// You can make use of the .length property of an array -
// Using done to track the number of rows that have been generated is functional, but you can actually clean up the logic a bit further.

// Arrays have a special length property that allows you to see how many values, or elements, are in the array. You would access this property using syntax like myArray.length.
rows[rows.length - 1]

while (rows.length <= count) {
  done++;
  rows.push(padRow(done, count));
}


// En primer lugar declaramos e inicializamos la variable cities con los valores Londres, Nueva York y Mumbai, imprimimos. En segundo lugar cambiamos el valor del ultimo elemento del array utilizando la propiedad .length - ? por Ciudad de Mexico
let cities = ["London", "New York" ,"Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities);

// ======================================================================================

// A method in JavaScript is a function that's associated with certain values or objects. 
// Examples: .log() part of console
// Arrays have their own methods
// rows.push("text") adds the "text" value to the rows array
rows.push("freeCodeCamp");
console.log(rows)
// rows.pop("word") removes the last value of rows and returns "word"
let popped = rows.pop()
console.log(popped);

// rows.push("freeCodeCamp") add the value to the Array. 
// Here we push "freeCodeCamp" on rows, then we declare the variable pushed that have the value of rows.push() (the same as "freeCodeCamp"). finally we print the variable "pushed".
rows.push("freeCodeCamp");
let pushed = rows.push();
console.log(pushed);

// =======================================================================================

// const variable
// const variables are special. A const variable cannot be reassigned like a let variable. This code would throw an error:
 
// example: THIS IS NOT POSSIBLE!!

// const firstName = "Naomi";
// firstName = "Jessica";

// A const variable also cannot be uninitialized. This code would throw an error:

// example: THIS IS NOT POSSIBLE!!

// const firstName;

const characterC = "#";
const countC = 8;
const rowsC = [];

// When you have to perform a task repeatedly until a condition is met, you will use a loop. 

for (iterator; condition; iteration) {
    logic;
  }

for ("iterator"; "condition"; "iteration") { 
}

// 1- the loop need a proper NodeIterator. The iterator is a variable you can declare specifically in your "for" loop to control how the loop iterates or goes through your logic.

// It is a common convention to use i as your iterator variable in a loop

// This will give the i variable the value 0 the first time your loop runs.

for (let i = 0; "condition"; "iteration") { 
}

// 2- The condition of a for loop tells the loop how many times it should iterate.  When the condition becomes false, the loop will stop.  a Boolean value can be either true or false. these are no strings.

// For now, you will use the less than operator (<). This allows you to check if the value on the left is less than the value on the right. count < 3 would evaluate to true if count is 2, and false if count is 4.

for (let i = 0; i < count; "iteration") { 
}

// 3- Your iteration statement will tell your loop what to do with the iterator after each run.

// When you reassign a variable, you can use the variable to reference the previous value before the reassignment. This allows you to do things like add three to an existing number. For example, bees = bees + 3; would increase the value of bees by three.

for (let i = 0; i < count; i = i + 1) {
    
}

// Your loop should now run eight times. Inside the body of the loop, print the value of the i iterator and see what happens.

for (let i = 0; i < count; i = i + 1) {
    console.log(i);
  }

//   Replace your log statement with a statement to push i to your rows array.

for (let i = 0; i < count; i = i + 1) {
    rows.push(i);
  }

//   Use let to declare a result variable, and assign it an empty string. An empty string is represented by quotation marks with nothing between them, such as "".

let result = "";
console.log(result);

// To manipulate the result string, you will use a different type of loop. Specifically, a for...of loop, which iterates over each item in an iterable object and temporarily assigns it to a variable. you can use const because the variable only exists for a single iteration, not during the entire loop.

for (const row of rows) {

}


// COncadenation:
// you can append a new string to an existing string. For example, hello = hello + " World"; would add the string " World" to the existing string stored in the hello variable. This is called concatenation.

for (const row of rows) {
    result = result + row;
   }

//Now all of your numbers are appearing on the same line. This will not work for creating a pyramid.

// You will need to add a new line to each row. However, pressing the return key to insert a line break between quotes in JavaScript will result in a parsing error. Instead, you need to use the special escape sequence \n, which is interpreted as a new line when the string is logged. For example:
// lineOne = lineOne + "\n" + lineTwo;

for (const row of rows) {
    result = result + "\n" + row;
  }

//   Instead of pushing i to the array, push the value of your character variable.

for (let i = 0; i < count; i = i + 1) {
    rows.push(character);

  }

//   Now you have a series of # characters, but the pyramid shape is still missing. Fortunately, the i variable represents the current "row" number in your loop, enabling you to use it for crafting a pyramid-like structure.

// To achieve this, you will use the .repeat() method available to strings. This method accepts a number as an argument, specifying the number of times to repeat the target string

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i));
    
  }

//   you're encountering what's known as an off-by-one error, a frequent problem in zero-based indexing languages like JavaScript.
// The first index of your rows array is 0, which is why you start your for loop with i = 0. But repeating a string zero times results in nothing to print.

// To fix this, add 1 to the value of i in your .repeat() call.

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1))
  }


//   ================================================================

FUNCTIONS

// The logic for formatting this pyramid is likely going to get complicated, which means it's a great time to extract that code into a function.

// A function is a block of code that can be reused throughout your application. Functions are declared with the following syntax:

// function name(parameter) {

// }

// The function keyword tells JavaScript that the name variable is going to be a function. parameter is a variable that represents a value that is passed into the function when it is used. A function may have as many, or as few, parameters as you'd like. Like a for loop, the space between the curly braces is the function body.

function padRow() {

}

// In order to use a function, you need to call it. A function call tells your application to run the code from the function wherever you choose to call it. The syntax for a function call is the function name followed by parentheses.


// Function call:
padRow();

// You are calling your padRow function, but not doing anything with that function call. All functions in JavaScript return a value, meaning they provide the defined result of calling them for you to use elsewhere.

// To see the result of calling your padRow function, declare a call variable and assign your existing padRow call to that variable.

const call = padRow();
padRow();


// Now add a log statement to print the value of your call variable.

function padRow() {

}
const call = padRow();
console.log(call);


// Your call variable has an undefined value, even though you defined it! This is because your padRow function does not currently return a value. By default, functions return undefined as their value.

// In order to return something else, you need to use the return keyword. 

function padRow() {
    return "Hello!";
  }

//   When you have a value that is explicitly written in your code, like the "Hello!" string in your function, it is considered to be hard-coded. Hard-coding a value inside a function might not make it as reusable as you'd like.

// Instead, you can define parameters for the function. Parameters are special variables that are given a value when you call the function, and can be used in your function to dynamically change the result of the function's code. To add a parameter to your function, you need to add a variable name inside the parentheses.

function padRow(name) {
    return "Hello!";
  }

//   A function does not have to return a hard-coded value. It can return the value stored in a variable. Parameters are special variables for a function, so they can also be returned.

function padRow(name) {
    return name;
  }


//   parameters need to be given a value when you call the function. if not function is returning undefined.

//   When you pass a value to a function call, that value is referred to as an argument. 

// Here is an example of calling a demo function and passing "Naomi" as the argument for the name parameter.

// function demo(name) {
//     return name;
//   }
//   demo("Naomi");

const call = padRow("name");

// Before moving on, take a moment to review how functions work.

// Declare a function named addTwoNumbers. This function should take two arguments and return the sum of those two arguments.

// Then declare a sum variable and assign it the value of calling your addTwoNumbers function with 5 and 10 as the arguments. Log the sum variable to the console.

// function addTwoNumbers(n1, n2) {
//     return n1 + n2;
//    }
//    const sum = addTwoNumbers(5, 10);
//    console.log(sum)

// Variables in JavaScript are available in a specific scope. In other words, where a variable is declared determines where in your code it can be used.

// The first scope is the global scope. Variables that are declared outside of any "block" like a function or for loop are in the global scope. Your character, count, and rows variables are all in the global scope.

// Variables can also be declared inside a function. These variables are considered to be in the local scope, or block scope. can only be used inside that function. If you try to access it outside of the function, you get a reference error.

// Values returned out of a function are used by calling the function. You can use the function call directly as the value it returns, or capture the returned value in a variable. This way, you can use the value assigned to a locally scoped variable, outside the function it was created in. no hay dios que entienda Esto.

// function getName() {
//     const name = "Camper cat";
//     return name;
//   }
  
//   console.log(getName()); // "Camper cat"
  
//   const capturedReturnValue = getName();
//   console.log(capturedReturnValue); // "Camper cat"
  
//   console.log(name); // reference error



function padRow(name) {
    const test = "Testing";  
    return test;
  }


//   An important thing to know about the return keyword is that it does not just define a value to be returned from your function, it also stops the execution of your code inside a function or a block statement. This means any code after a return statement will not run.

function padRow(name) {
    const test = "Testing";
    console.log("This works!"); // it works because is avobe the return keyword.
    return test;
    console.log("This works"); // it couldn´t work. it is below the return keyword
  }


// Remember in an earlier step, you learned about return values. A function can return a value for your application to consume separately.

// In a function, the return keyword is used to specify a return value. For example, this function would return the value given to the first parameter:

// Example Code
// function name(parameter) {
//   return parameter;
// }
// Use the return keyword to return the value of the character variable, repeated rowNumber times.

function padRow(rowNumber, rowCount) {
    return character.repeat(rowNumber);
  }

//   A function call allows you to actually use a function. You may not have been aware of it, but the methods like .push() that you have been using have been function calls.

//   A function is called by referencing the function's name, and adding (). Here's how to call a test function:

//   test();

// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
    
//   }

// to

  for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow())
  }

//   Your padRow function has two parameters which you defined. Values are provided to those parameters when a function is called.

// The values you provide to a function call are referred to as arguments, and you pass arguments to a function call. Here's a function call with "Hello" passed as an argument:

// Example Code
// test("Hello");
// Pass i + 1 and count as the arguments to your padRow call. Like parameters, arguments are separated by a comma.

for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow(i + 1, count))
  }

  // Use the addition operator to concatenate a single space " " to the beginning and end of your repeated character string.

  // Remember that you can use the + operator to concatenate strings like this:

  " " + "string"

  awnser: 
  
  function padRow(rowNumber, rowCount) {
    return " " + character.repeat(rowNumber) + " "; // hay que recordar que el "string" es character.repeat(rowNumber)
  }

//  Update your blank space strings to be repeated rowCount - rowNumber times.

  function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount-rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount-rowNumber);
  }
  

  // ou can pass full expressions as an argument. The function will receive the result of evaluating that expression. Update the character value to be repeated 2 * rowNumber - 1 times.

  function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber -1) + " ".repeat(rowCount - rowNumber);
  }


// =================================================================================================
// =================================================================================================

* Operadores

test = test + 1;
test += 3; // sumaria 3 a test
test ++ ; // incrementa el valor de test en 1
test <= 1; // menor o igual que
test ** 1; // potencia de 1
test == 1; // check if two values are equal. The equality operator can lead to some strange behavior in JavaScript. For example, "0" == 0 is true, even though one is a string and one is a number.
test === 1; // The strict equality operator === is used to check if two values are equal and share the same type. As a general rule, this is the equality operator you should always use. 
test !== 1; // Check if two values are not equal or do not have de same type

// ===========================================================================================
// ===========================================================================================

 * Loops

  /*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/


// if statements. Allows ou to run a block of only when a condition is met. it use the following syntax:
/* 
if (condition) {
  logic
}
   */


if (true) {
console.log("Condition is true");
}

// In addition to if statements, JavaScript also has else if statements. else if statements allow you to check multiple conditions in a single block of code.

if (condition1) {
  // code to run if condition1 is true
} else if (condition2) {
  // code to run if condition2 is true
} else if (condition3) {
  // code to run if condition3 is true
} 

// If the first condition is false, JavaScript will check the next condition in the chain. If the second condition is false, JavaScript will check the third condition, and so on.

if ("") {
  console.log("Condition is true");
} else if (5 < 10) {
  console.log("5 is less than 10");
}

// Sometimes you will want to run different code when ¡ALL! of the if...else if conditions are false. You can do this by adding an else block. An else block will only evaluate if the conditions in the if and else if blocks are not met.

// Here the else block is added to the else if block.

if (condition) {
  // this code will run if condition is true
} else if (condition2) {
  // this code will run if the first condition is false
} else {
  // this code will run 
  // if the first and second conditions are false
}

if ("") {
  console.log("Condition is true");
} else if (5 > 10) {
  console.log("5 is less than 10");
} else {
  console.log("This is the else block");
}

// this print the last log because 5 is less than 10

// **While Loops

// A while loop will run over and over again until the condition specified is no longer true. It has the following syntax:

/* while (condition) {
  logic;
} */


let continueLoop = false;
let done = 0;

while(//CONDITION) {

}

while (continueLoop) { // inicializa el loop.
  done++;               // añade 1 cada vez que se ejecuta el loop while.
  rows.push(padRow(done, count)); // Genera de nuevo la piramide.
  if (done === count) {   // Comparra de manera estricta dichos valores.
    continueLoop = false; // una vez done alcanze a count el loop se detendra.
  }
}

//the same as:

while (done !== count) { // inicializa el loop.
  done++;               // añade 1 cada vez que se ejecuta el loop while.
  rows.push(padRow(done, count)); // Genera de nuevo la piramide.
}

// In this case we could delete the continueLoop declaration because it is unused.


/* You can also replace the done reference in your padRow call.

Note that rows.length here would give you an off-by-one error, because done is incremented before the call.

So you'll need to replace done here with rows.length + 1. When you do this, you may see a Range Error, because we've created another off-by-one error.

You'll need to change the while condition to use the less than operator, instead of the less than or equal operator.  */

while (rows.length < count) {
  done++;
  rows.push(padRow(rows.length + 1, count));
}

// so we need no longer our done variable


while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}

// ====================================================================================================
// ====================================================================================================

*Booleanos

true = true
false = false
"false" = true //false is a string, boolean becomes true
// A truthy value is a value that is considered true when evaluated as a boolean. Most of the values you encounter in JavaScript will be truthy.
// A falsy value is the opposite - a value considered false when evaluated as a boolean. JavaScript has a defined list of falsy values. Some of them include false, 0, "", null, undefined, and NaN.
false = 0 , "", null, undefined, NaN

*Step 98

// Inverted pyramid:

for (let i = count; i > 0; i = i--) {
  rows.push(padRow(i, count))
}

* unshifted method 

// The .unshift() method of an array allows you to add a value to the beginning of the array,

const numbers = [1, 2, 3];
const unshifted = numbers.unshift(5);
console.log(numbers);

//========================================================== FINAL CODE ======================================


const character = "#";  //select the displayed chacarter
const count = 8;        //Number of rows
const rows = [];        // Rows array, here we will add the rows
let inverted = true;    // Select the direction of the pyramid

function padRow(rowNumber, rowCount) { //two variables
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber); 
}

for (let i = 1; i <= count; i++) { 
  if (inverted) {
    rows.unshift(padRow(i, count)); //loop for normal pyramid (if  inverted is true)
  } else {
    rows.push(padRow(i, count));    // loop for inverted pyramid (if inverted is  false)
  }
}

let result = ""                      //declaration of result variable
                                  
for (const row of rows) {            // for..of loop
  result = result + "\n" + row;      //
}                                   
                                  
console.log(result);                 //

