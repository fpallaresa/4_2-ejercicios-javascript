/*
    Crea una función que imprima todos los números primos entre el 1 y el 100.
        Después, tendrá que imprimir la suma de todos esos
*/


function primeNumbers() {       

    function isPrime(number) {                  // función para saber si el número es primo
        if (number <= 1) {                      // buscamos si el número es menor que él mismo
        }

        for (let i = 2; i < number; i++) {      // si no es posible dividirlo por algún número debe devolver true
            if (number % i === 0) {             // el operador % devuelve el resíduo, por lo tanto si el residuo es diferente a 0 devueve false
                return false;
            }
        }

        return true;
    }

    
    let sum = 0;

    for (let i = 1; i <= 100; i++) {            // Empezamos el bluce para iterar del 1 al 100
        if (isPrime(i)) {
            console.log(i);
            sum += i;                           // Mostramos en consola cada número
        }
    }   

    console.log(sum);                           // Mostramos en consola la suma
}

primeNumbers();