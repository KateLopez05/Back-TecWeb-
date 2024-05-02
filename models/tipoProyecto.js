const {Schema, model} =require('mongoose')

const TipoProyectoSchema = Schema({
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

module.exports = model('Tipo de Proyecto', TipoProyectoSchema)