const dividir = require ("../../Prueba/dividir")

//Dividir numeros ordinarios
test('La division de 10 entre 2 es 5', () => {
    expect(division(10,2)).toBe(5);
});

//Dividir numeros a entre y b 0
test('La division de 10 entre 0 es Error', () => {
    expect(division(10,0)).toBe(Error);
});

//Dividir numeros ordinarios
test('La division de  0 entre 10 es Error', () => {
    expect(division(0,10)).toBe(Error);
});

//Dividir numeros ordinarios
test('La division de  -10 entre -2 es 5', () => {
    expect(division(10,2)).toBe(5);
});
