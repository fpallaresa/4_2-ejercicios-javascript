/*
    Crea una función que reciba un array de personas y devuelva un string con las personas separadas
    por el símbolo recibido en el segundo argumento.

    Ejemplo:
        Entrada: (['Pedro', 'Gon', 'Luis', 'Fran'], '/')
        Salida: 'Pedro/Gon/Luis/Fran'
*/

function arrayPeople (names, sep) {

    let people = names.toString ('');
    let elementSep = people.replaceAll(',', sep); 
    return elementSep

}

let arrayNames = ['Pedro', 'Gon', 'Luis', 'Fran'];
let character = '/';

console.log(arrayPeople(arrayNames,character));