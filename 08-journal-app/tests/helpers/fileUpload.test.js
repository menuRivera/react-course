import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

const cloudinarySettings = {
    cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUDNAME,
    api_key: import.meta.env.VITE_CLOUDINARY_APIKEY,
    api_secret: import.meta.env.VITE_CLOUDINARY_APISECRET,
    secure: true
}

cloudinary.config(cloudinarySettings);

console.log(cloudinarySettings);
// console.log(import.meta.env.VITE_CLOUDINARY_APISECRET);


describe('Pruebas en fileUpload', () => {
    test('Debe subir el archivo correctamente', async () => {
        const imageUrl = 'https://www.petdarling.com/wp-content/uploads/2018/11/gato-comun-europeo-180x180.jpg';
        const res = await fetch(imageUrl);
        const blob = await res.blob();
        const file = new File([blob], 'foto.jpg');

        // No consigo que el fetch haga la carga de las imágenes en el test
        // aunque si funciona bien en la app
        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        // Esto no pude testearlo por el problema anterior
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');

        const cloudResp = await cloudinary.api.delete_resources(['journal/' + imageId], {
            resource_type: 'image'
        });
    });

    test('Debe retornar null', async () => {
        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);

        expect(url).toBe(null);
    });



});