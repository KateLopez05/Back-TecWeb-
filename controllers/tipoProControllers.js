const Tipo = require ('../models/tipoProyecto')
const {request, response} = require('express')

const createTipo = async (req= request, res= response) => {
    try {
        const body = req.body
        const tipo = new Tipo(body)

        await tipo.save()
        return res.status(201).json(tipo)
    } catch (error) {
        return res.status(500).json({
            mensaje: error
        })
    }
}

const readTipo = async (req= request, res= response) => {
    try {
        const tipo = req.query.tipo
        const tipos = await Tipo.find()

        return res.json(tipos)
    } catch (error) {
        return res.status(500).json({
            mensaje: error
        })
    }
}

const updateTipo = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const body = req.body

        body.fechaActualizacion = new Date()

        const tipos = await Tipo.findByIdAndUpdate(id, body, {new: true})
        return res.status(201).json(tipos)
    } catch (error) {
        return res.status(500).json({
            mensaje: error
        })
    }
}

const deleteTipo = async (req= request, res= response) => {
    try {
        const id= req.params.id

        await Tipo.findByIdAndDelete(id)

        return res.status(204).json({
            mensaje: 'Tipo de proyecto BORRADO'
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: error
        })
    }
}

module.exports = {
    createTipo,
    readTipo, 
    updateTipo,
    deleteTipo
}