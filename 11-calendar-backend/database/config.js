const mongoose = require('mongoose')

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('[Mongo connected]');
    } catch (error) {
        console.error(error);
        throw new Error('Error al inicializar la base de datos')
    }
}

module.exports = {
    dbConnection
}