const Etapas = require ('../models/etapa')
const {request, response} = require('express')

const createEtapa = async (req= request, res= response) => {
    try {
        const body = req.body
        const etapa = new Etapas(body)

        await etapa.save()
        return res.status(201).json(etapa)
    } catch (error) {
        return res.status(500).json({
            mensaje: error
        })
    }
}

const readEtapa = async (req= request, res= response) => {
    try {
        const etapa = req.query.etapa
        const etapas = await Etapas.find()

        return res.json(etapas)
    } catch (error) {
        return res.status(500).json({
            mensaje: error
        })
    }
}

const updateEtapa = async (req= request, res= response) => {
    try {
        const id = req.params.id
        const body = req.body

        body.fechaActualizacion = new Date()

        const etapas = await Etapas.findByIdAndUpdate(id, body, {new: true})
        return res.status(201).json(etapas)
    } catch (error) {
        return res.status(500).json({
            mensaje:error
        })
    }
}

const deleteEtapa = async (req= request, res= response) => {
    try {
        const id= req.params.id

        await Etapas.findByIdAndDelete(id)

        return res.status(204).json({
            mensaje: 'Etapa BORRADA'
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: error
        })
    }
}

module.exports = {
    createEtapa,
    readEtapa, 
    updateEtapa,
    deleteEtapa
}