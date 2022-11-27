const jwt = require('jsonwebtoken')

const generateJWT = (uid, name) => {
    return new Promise((resolve, reject) => {
        jwt.sign({ uid, name }, process.env.SECRET_JWT_SEED, {
            expiresIn: '2h'
        }, (err, token) => {
            if (err) {
                console.error(err)
                reject('No se pudo generar el token')
                return
            }
            resolve(token)
        })
    })
}

module.exports = {
    generateJWT
}