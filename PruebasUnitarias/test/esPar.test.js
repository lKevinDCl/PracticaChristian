const esPar = require ("../../Prueba/esPar")

//numero par
test('El numero es 2 es par ', () => {
    expect(esPar(2)).toBe(false);
});


//numero impar
test('El numero es 3 es impar ', () => {
    expect(esPar(3)).toBe(true);
});

//numero 0 es par?
test('El numero es 0 es impar ', () => {
    expect(esPar(0)).toBe(false);
});

//numero -2 es par
test('El numero es -2 es impar ', () => {
    expect(esPar(-2)).toBe(false);
});
