
import {getImagen} from '../../src/base-pruebas/base-pruebas/11-async-await'

describe('pruebas en 11-async-await', () => { 

    test('getImagen debe de retonar un url de la imagen',async () => { 


            const url = await getImagen();

            console.log(url)

            expect(typeof url).toBe('string')

     }) 


 })