const {Schema, model} = require('mongoose')

const proyectoSchema = Schema({
    numero:{
        type: Number, 
        required: [true, 'Numero es requerido'],
        unique:[true, 'Numero ya existe']
    },
    titulo: {
        type: String,
        required: [true, 'El titulo es requerido']
    },
    fechaInicio: {
        type: Date
    },
    fechaEntrega: {
        type: Date
    },
    valor: {
        type: Number
    },
    fechaCreacion: {
        type: Date
    },
    fechaActualizacion: {
        type: Date
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo de Proyecto',
        required: true
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: true
    },
    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa de proyecto',
        required: true
    }
})

module.exports = model('Proyecto', proyectoSchema)