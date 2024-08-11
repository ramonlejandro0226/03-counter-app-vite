import {getHeroeByIdAsync} from '../../src/base-pruebas/base-pruebas/09-promesas'


describe('Pruebas con promesas', () => {{

 test('getHeroeByIdAsync debe de retonar un heroe', (done) => { 


    const id = 1;

    getHeroeByIdAsync(id).then(hero=>{


        expect(hero).toEqual({
            id:1,
            name:'Batman',
            owner:'DC'
        })

      
        done()
    })






 })


}});