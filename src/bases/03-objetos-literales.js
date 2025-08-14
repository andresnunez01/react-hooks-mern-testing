const persona = {
    nombre: 'Andres',
    apellido: 'Nunez',
    edad: 24,
    direccion: {
        ciudad: 'SJC',
        cp:23400,
        lat: 23.0637,
        lng: 109.7024,

    }

}


// console.table( { persona:persona} )


let persona2 = {...persona};
persona2.nombre = 'Macario';

console.log(persona)
console.log(persona2)