// calculadora.test.js
const suma = require('../../Prueba/suma');


//Suma numero enteros
test('suma de 2 + 3 debe ser 5', () => {
    expect(suma(2, 3)).toBe(5);
});


//Suma numeros decimales
test('suma de 2.5 + 3.5 debe ser 6', () => {
    expect(suma(2.5, 3.5)).toBe(6);
});


//Suma numeros negativos
test('suma de (-2) + -(5) debe ser 7', () => {
    expect(suma(-2, -3)).toBe(-5);
});

//Suma de 0

test('suma de (0) + -(0) debe ser 7', () => {
    expect(suma(0, 0)).toBe(0);
});

