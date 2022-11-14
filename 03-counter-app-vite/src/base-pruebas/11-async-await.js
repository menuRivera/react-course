

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getPost = async (id) => {

    try {
        const url = 'https://jsonplaceholder.typicode.com/posts/'

        const resp = await fetch(url + id);
        const data = await resp.json();

        // const { url } = data.images.original;

        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append( img );
        return data

    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'No se encontró'
    }



}