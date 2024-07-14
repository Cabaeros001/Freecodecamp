const contadorCalorias = document.getElementById("contador-calorias");
const dailyCalories = document.getElementById("daily-calories");
const newEntryDropdown = document.getElementById("new-entry-drop");
const addEntryButton = document.getElementById("add-entry");
const calculateButton = document.getElementById("calculate");
const clearButton = document.getElementById("clear");
// const inputContainer = document.getElementsByClassName("input-container");
let isError = false; //global flag



function cleanInputString(str) { //elimina los + - y espacios de los inputs
 const regex = /[+-\s]/;
 return str.replace(regex, "");
}
function addEntry() {
    const targetInputContainer = document.querySelector(`#${newEntryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length; //añade un número segun la posicion quese crea en el node list
    const HTMLString = `<label for="${newEntryDropdown.value}-${entryNumber}-name">#${entryNumber} Nombre:<input type="text" id="${newEntryDropdown.value}-${entryNumber}-name"><br></label>
    <label for="${newEntryDropdown.value}-${entryNumber}-calories">#${entryNumber} Calorias: <input type="number" id="${newEntryDropdown.value}-${entryNumber}-calories"></label><hr>`;
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

function clear() {
    const inputContainers = Array.from(document.querySelectorAll('.input-container'));
    for ( const container of inputContainers) {
        container.innerHTML = "";
        dailyCalories.value = "";
        //faltan funciones
    }
}
addEntryButton.addEventListener("click", addEntry); 
clearButton.addEventListener("click", clear);


