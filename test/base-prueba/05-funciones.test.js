import { getUser,getUsuarioActivo } from '../../src/base-pruebas/base-pruebas/05-funciones';

describe('prueba en 05-funciones', () => { 

    test('getUser debe retonar un objeto', () => { 

        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual( userTest );




     })


     test('getUsuarioActivo debe retornar un objeto', () => { 

        const nombre = 'Fernando';

        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo( nombre );

        expect( user ).toEqual( {
            uid: 'ABC567',
            username: nombre

        } );

     }) 


 })