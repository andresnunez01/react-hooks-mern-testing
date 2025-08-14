const nombre = 'Andres';
const apellido = 'Nunez'

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombreCompleto){
    return `Hola ${nombreCompleto}`;
}

console.log(`Esto es un texto: ${getSaludo(nombreCompleto)}`)