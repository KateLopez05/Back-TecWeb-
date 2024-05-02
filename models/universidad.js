const {Schema, model} =require('mongoose')

const universidadSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre de la universidad es requerido'],
        minLength: 1
    },
    direccion: {
        type: String
    },
    telefono: {
        type: Number
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date
    }
})

module.exports = model('Universidad', universidadSchema)