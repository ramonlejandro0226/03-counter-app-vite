
describe('Pruebas en el archivo demo.test.js', () => {

    test('esta prueba no debe pasar', () => {

        //1. Arrange
    
        const message1 = 'Hola Mundo';
    
    
        //2. Act
    
        const message2 = message1.trim();
    
    
    
        //3. Assert
    
        expect(message1).toBe(message2);
    
    });

});
