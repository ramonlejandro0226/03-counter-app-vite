import { getSaludo } from "../../src/base-pruebas/base-pruebas/02-template-string";

describe('prueba en 02-template-string', () => { 


    test('getsaludo debe retonar hola fernando',() => {

        const nombre = 'Fernando';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre );




    })
 })