// Crear un elemento <h1> y ponerle un texto inicial
var h1 = document.createElement('h1');
h1.innerText = "Type into the input to make this text change";

// Crear un campo de texto <input> y definir que sea de tipo texto
var input = document.createElement('input');
input.setAttribute('type', 'text');

// Limpiar el contenido actual del cuerpo de la página
document.body.innerText = '';

// Agregar el título y el campo de texto al cuerpo de la página
document.body.appendChild(h1);
document.body.appendChild(input);

// Escuchar el evento 'change' en el campo de texto
// Cuando el usuario termine de escribir y presione Enter,
// cambiar el texto del título por lo que escribió
input.addEventListener('change', function() {
    h1.innerText = input.value;
});