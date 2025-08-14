const getImagen = async () =>{
    const apiKey = 'Vm1kWEPjDt6SrhmfcIB72W9fA7DORrwa';

    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const { data } = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement('img')
    img.src = url;

    document.body.append(img)
}

getImagen();



// peticion.then( (resp)=> resp.json())
// .then(({data}) => {
//     const { url } = data.images.original;
    
//     const img = document.createElement('img');
//     img.src = url;

//     document.body.append( img )
// })
// .catch(console.warn)