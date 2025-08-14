//desestructuracion
//Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    
}

// const { edad, clave, nombre } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);


const useContext = ( {nombre, edad, clave, rango = 'capitan '} ) => {

    // console.log( nombre, edad, rango )
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.13,
            lng: 13.2
        }
    }
}


const avenger = useContext(persona);

const { nombreClave, anios, latlng: { lat, lng}} = avenger

console.log(nombreClave, anios);

console.log(lat, lng)