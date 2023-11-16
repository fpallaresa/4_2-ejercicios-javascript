/*
    Crea una función que reciba un array de objetos persona y devuelva un array con el nombre de las personas
    cuyo id coincida con la posición del array en el que se encuentra.


    Ejemplo:
        Entrada: [{id:2, name:'Pedro'},{id:1, name:'Juan'},{id:5, name:'Luis'},{id:3, name:'Gon'},{id:4, name:'Fran'} ]
        Salida: ['Juan','Gon','Fran']
*/


function peopleObjects (arrayElement) {

    let finalResult = [];
    
    for (let i = 0; i < arrayElement.length; i++) {
        if (i === arrayElement[i].id) {
            finalResult.push(arrayElement[i].name);
        }
    }

    return finalResult
}

let persons = [{id:2, name:'Pedro'},{id:1, name:'Juan'},{id:5, name:'Luis'},{id:3, name:'Gon'},{id:4, name:'Fran'} ];

console.log (peopleObjects (persons));