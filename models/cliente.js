const {Schema, model} =require('mongoose')

const clienteSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido'],
        minLength: 1
    },
    email: {
        type: String
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date
    }
})

module.exports = model('Cliente', clienteSchema)