/*
    Crea una función que reciba 2 arrays de números y devuelva uno unificado,
    sumando los números de la misma posición.
    Los arrays pueden tener diferente longitud.

    Elemplo: 
      Entrada: [1,4,5,7] [2,1,5,1,1]
      Salida: [3,5,10,8,1]
*/



function sumArrays(element1, element2) {
  
  let result = [];

  for (let i = 0; i < element1.length || i < element2.length; i++) {
    
    let number1 = element1[i] || 0; 
    let number2 = element2[i] || 0; 

    result.push(number1 + number2);
  }

  return result;
}

let firstArray = [1, 4, 5, 7];
let secondArray = [2, 1, 5, 1, 1];

let sum = sumArrays(firstArray, secondArray);

console.log(sum);