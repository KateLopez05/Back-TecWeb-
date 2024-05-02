const mongoose = require('mongoose')

const MongoConection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {})
        console.log('La conexión fue exitosa!')
    } catch (e) {
        console.log('Error de conexión', e)
        throw new Error('Error de conexión')
    }
}

module.exports = { MongoConection }