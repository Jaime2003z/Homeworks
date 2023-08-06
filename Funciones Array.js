const myArray = [1, 2, 3, 4, 5];

// Obtiene la longitud del array
const length = myArray.length;

// Verfica si el array contiene un elemento
const contains = myArray.includes(3);

// Obtiene el primer elemento del array
const firstElement = myArray[0];

// Agrega un elemento al final del array
myArray.push(6);

// Remueve el ultimo elemento del array
myArray.pop();

// Ordena el array
myArray.sort();

// Revierte el array
myArray.reverse();

//Concatena dos o más arrays.
myArray.concat([7, 8, 9]);

//Devuelve un iterador de objetos de pares clave-valor para cada elemento del array.
myArray.entries();

//Devuelve un nuevo array que contiene los elementos del array original que cumplen una condición
myArray.filter(element => element % 2 === 0);

//Devuelve el primer elemento del array que cumpla una condición
myArray.find(element => element % 2 === 0);

//Devuelve el índice del primer elemento del array que cumpla una condición
myArray.findIndex(element => element % 2 === 0);

//Devuelve un nuevo array que contiene los resultados de aplicar una función a cada elemento del array original.
myArray.map(element => element * 2);

//Devuelve una nueva copia del array con un rango especificado de elementos.
myArray.slice(1, 3);

// Agrega un valor al inicio del array
myArray.unshift(0);

//Elimina el primer valor del array
myArray.shift();

// Iterate over the array
myArray.forEach(element => {
    console.log(element);
});