import { getHeroeById } from "./08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( ()=>{
//         const heroe = getHeroeById(2)
//         resolve(heroe);
//         // reject('No se encontro el heroe');
//     }, 3000)
// });

// promesa.then((heroe)=>{console.log(heroe)}).catch(err => console.warn(err))

const getHJeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      
      
      if(heroe){
        resolve(heroe)
      }else{
        reject('No se encontro el heroe')
      }
    }, 2000);
  });
};


getHJeroeByIdAsync(2).then(console.log).catch(console.warn);