//Primero escribimos el test que falla. en un archivo llamado por ejemplo statusKeys.test.js
const { statusOfKeys } = require('./statusKeys');

test('statusOfKeys function exists', () => {
  expect(typeof statusOfKeys).toBe('function');
});

test('statusOfKeys logs true when keys are present', () => {
  console.log = jest.fn(); // Mock console.log
  statusOfKeys(true);
  expect(console.log).toHaveBeenCalledWith(true);
});

//Luego escribimos el código para que el test pase. en un archivo llamado por ejemplo statusKeys.js
function statusOfKeys(keys) {
  console.log(keys);
}

module.exports = { statusOfKeys };

//Finalmente, limpiamos el código si es necesario.

/*Cómo usarlo en VS Code:

Crea dos archivos: statusKeys.js y statusKeys.test.js.
Instala Jest si no lo tienes: npm install --save-dev jest
En tu package.json agrega el script "test": "jest"
Corre las pruebas con npm test */