const {Schema, model} =require('mongoose')

const etapaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre de proyecto requerido'],
        minLength: 1
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date
    }
})

module.exports = model('Etapa de proyecto', etapaSchema)