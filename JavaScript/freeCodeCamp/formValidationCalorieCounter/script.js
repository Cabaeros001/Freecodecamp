const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false; // this is a global error flag //In programming, prefixing a variable with is or has is a common practice to signify that the variable represents a boolean value.

function cleanInputString(str) {
  console.log("original string:", str);
  const regex = /[+-\s]/;
  return str.replace(regex, ""); //   replace all instances of +, -, and a space (const regex) in str with an empty string. Return this value.
}

// console.log(cleanInputString("+-98")) 

//  In HTML, number inputs allow for exponential notation (such as 1e10). You need to filter those out.
function isInvalidInput(str) {
  const regex = /\d+e\d+/i; //assign a regex that matches the character e and any digits around e.
  return str.match(regex);
}

/*   console.log(isInvalidInput("1e3")); //  returns [ '1e3', index: 0, input: '1e3', groups: undefined ] */

/* function addEntry() {
  const targetId = '#' + entryDropdown.value ; //use the value property to get the value of the selected option.
  const targetInputContainer = document.querySelector(targetId + " .input-container") ; //target the .input-container element within the element that has your targetId
  // const targetInputContainer = document.querySelector(`${targetId} .input-container`) // template literals, which allow you to interpolate variables directly within a string. Replace our concatenated string in the querySelector with a template literal

  } */

function addEntry() {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`); // Thanks to template literals, you actually don't need the targetId variable at all. 
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length; //Pass the string input[type="text"] to the querySelectorAll() method and access then the length property of the returned NodeList.
  const HTMLString = `  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name"/>
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input type="number" min="0" id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" />`;
  // create a label and input elements and use "template literal" to use the variables entryNumber and entryDropdown within. 
  //targetInputContainer.innerHTML += HTMLString; // If you want to add another label and input element inside the form, then you can use the innerHTML property
  targetInputContainer.insertAdjacentHTML('beforeend', HTMLString); // to add HTMLString and save the changes
}

function calculateCalories(e) {//This function will be another event listener, so the first argument passed will be the browser event – e is a common name for this parameter.
  e.preventDefault();
  isError = false;
  const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type=number]") // This will return any number inputs that are in the #breakfast element.
}

function getCaloriesFromInputs(list) { // The list parameter is going to be the result of a query selector, which will return a NodeList. A NodeList is a list of elements like an array.
  let calories = 0;
  for (const item of list) { //A for...of loop is used to iterate over elements in an iterable object like an array. The variable declared in the loop represents the current element being iterated over. 
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);

    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`) // using template literal to show the first value on the invalidInputMatch array
      isError = true;
      return null; // end of the function
    } 
    calories += Number(currVal);

  }
  return calories;
}

addEntryButton.addEventListener("click", addEntry) //addEventListener have to arguments, the first is the event to listen, the second is the callback function, or the function thant runs when the event is triggered

