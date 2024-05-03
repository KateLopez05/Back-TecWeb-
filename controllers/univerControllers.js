const Universidades = require ('../models/universidad')
const {request, response} = require('express')

const createUniversidad = async (req= request, res= response) => {
    try {
        const body = req.body
        const universidad = new Universidades(body)

        await universidad.save()
        return res.status(201).json(universidad)
    } catch (error) {
        return res.status(500).json({
            mensaje: error
        })
    }
}

const readUniversidad = async (req= request, res= response) => {
    try {
        const universidad= req.query.universidad
        const universidades = await Universidades.find()

        return res.json(universidades)
    } catch (error) {
        return res.status(500).json({
            mensaje: error
        })
    }
}

const updateUniversidad = async (req= request, res= response) => {
    try {
        const id = req.params.id
        const body = req.body

        body.fechaActualizacion = new Date()

        const universidad = await Universidades.findByIdAndUpdate(id, body, {new: true})
        return res.status(201).json(universidad)
    } catch (error) {
        return res.status(500).json({
            mensaje:error
        })
    }
}

const deleteUniversidad = async (req= request, res= response) => {
    try {
        const id= req.params.id

        await Universidades.findByIdAndDelete(id)

        return res.status(204).json({
            mensaje: 'Universidad BORRADA'
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: error
        })
    }
}

module.exports = {
    createUniversidad,
    readUniversidad, 
    updateUniversidad,
    deleteUniversidad
}