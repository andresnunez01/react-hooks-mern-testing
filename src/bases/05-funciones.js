

// const saludar = function (nombre){
//     return `Hola, ${nombre}`
// };

//saludar = 30

// console.log(saludar('Andres'))


const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar2('Andres'));
console.log(saludar3('Nunez'));
console.log(saludar4());
const getUser = () => 
    ({
        uid: 'AN_01',
        username: 'andres_nunez_01'
    });


    const user = getUser();
console.log(user);


//Actividad
// 1. TRANSFORMAR A UNA FUNCION FLECHA
// 2. RETORNAR UN OBJETO IMPLICITO
// 3. PRUEBAS

// function getUsuarioActivo(){
//     return {
//         uid: 'AN_02',
//         username: 'andresnunez01'
//     }
// };

// const ususarioActivo = getUsuarioActivo();
// console.log(ususarioActivo)


const getUsuarioActivo = (nombre) =>({
        uid: 'AN_02',
        username: nombre
    })

console.log(getUsuarioActivo('andresnunez01'))