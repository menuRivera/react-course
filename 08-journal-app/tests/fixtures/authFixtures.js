export const initialState = {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const authenticatedState = {
    status: 'authenticated',
    uid: 'dskjflsa',
    email: 'si@gmail.com',
    displayName: 'Juan Esteban',
    photoURL: 'https://unafoto.com/hola.jpg',
    errorMessage: null,
}

export const notAuthenticatedState = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const demoUser = {
    uid: 'fdsafa',
    email: 'si@gmial.com',
    displayName: 'Hector',
    photoURL: 'https://sisi.jpg'
}