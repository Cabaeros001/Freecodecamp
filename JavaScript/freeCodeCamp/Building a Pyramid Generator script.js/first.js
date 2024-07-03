// ==========================Juez de edad===================================
/* let edad = 50;
let estado;
let done = 0;
let continueLoop = false;
;
if (edad <= 15) {
    estado = "Eres un crio";

} else if (edad > 15, edad < 29) {
    estado = "Eres un chaval";

} else {
    estado = "ERES UN VIEJALES!!!!!"
}
console.log(estado); */

//======================Loop potencialmente infinito=======================================

/* while (continueLoop) {
    done++;
    console.log("vivo");
} */

//=======================Pruebas array =====================================================

/* let array = ["griega", "equis", "zeta", "joder", "joder", "joder", "joder"];

console.log(array.length) */

/* let cities = ["London", "New York" ,"Mumbai"];
console.log(cities);
cities[cities.length - 4] = "Mexico City";
console.log(cities); */

//========================== Mi piramide ==========================================
/* const caracter = "+";
const numeroFilas = 8;
const filas = [];

for (let i = 0; i < numeroFilas; i++) {
    filas.push(i);
    console.log(carcater);
}
for (const row of rows) {
    result = result + row;
   }

let result = "";
console.log(result); */

//========================== concadenation ==========================================


/* let englishHi = "Hello";
let spanishHi = "Hola";

if (englishHi = "Hello") {
    console.log(spanishHi);
} */


/* Hello = Hello + " World";

console.log(hello); */

//========================= Calcular la media ================================

/* let n1 = 2;
let n2 = 2;
let n3 = 2; */


/* function sum(n1, n2, n3) {
    return (n1 + n2 + n3) / sum.length;
}
media = sum(parseInt(prompt("Primer numero")), parseInt(prompt("Primer numero")), parseInt(prompt("Primer numero")));
alert("la media de los tres números es " + media); */

//========================= Km ================================

/* n km
n litro
cuanto consume por km? */

/* let numeroKm = parseInt(prompt("Introduzca el número de kilometros recorridos."));
let cantidadLitros = parseInt(prompt("Introduzca la cantidad de litros consumidos."));
alert("Su vehiculo consume " + (cantidadLitros / numeroKm) * 100 +  " L/100 Km");1 */


//====================================== calcularr la media valores en un array ==========================


/* function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
      let media = sum / scores.length + 1;
      
    }
    return(sum / scores.length)
  }
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])); */

  // solucion de la maquina:

/*   function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  } */

  //====================================== Graduador ==========================

/*   function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score <= 99, score >= 90) {
      return "A";
    } else if (score <= 89, score >= 80) {
      return "B";
    } else if (score <= 79, score >= 70) {
      return "C";
    } else if (score <= 69, score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56)) */;

  //=======================Message scores students===============================
  function studentMsg(totalScores, studentScore) {
    if (getGrade(studentScore) !== "F") {
      return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course."
    } else {
      return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course."
    }
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
  console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100))