/*
    Un palíndromo es una element que se deletrea de la misma manera en ambos sentidos.
    Crea una función que reciba una element y devuelva true o false si es o no palíndromo.

    Ejemplo:
        Entrada: 'oso'
        Salida: true

*/

function palindrome(element) {
    
    let arrayCharacters = element.split('');                        // Convertimos la palabra en un array para poderlo manipular
    let turnArray = arrayCharacters.reverse();                      // Le damos la vuelta el array para tener la palabra al revés
    let elementReverse = turnArray.toString('');                    // Unimos los caracteres invertidos en una string
    let elementWitoutComas = elementReverse.replaceAll(',', '');    // Eliminamos las comas
    return element === elementWitoutComas;                          // Comparación de la palabra inicial con la invertida
}

let result = 'oso';
console.log(palindrome(result));