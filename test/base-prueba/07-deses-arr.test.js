import { retornaArreglo } from "../../src/base-pruebas/base-pruebas/07-deses-arr"


describe('Pruebas en 07-deses-arr', () => {

    test('debe de retornar un string y un numero', () => {

        const [letters,numbers] = retornaArreglo(); // ['ABC', 123]

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);


        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(letters).toEqual(expect.any(String));





     })



})