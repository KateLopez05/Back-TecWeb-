const Proyecto = require('../models/proyecto')
const {request, response} = require('express')

const createProyecto = async(req= request, res= response) => {
    try {
        const body = req.body
        const agregado = new Proyecto(body)

        await agregado.save()

        return res.status(201).json(agregado)
    } catch (error) {
        return res.status(500).json({
            mensaje: error
        })
    }
}

const readProyecto = async (req= request, res= response) => {
    try {
        const { todo } = req.query
        const consultarTodo = await Proyecto.find({todo})

        return res.json(consultarTodo)
    } catch (error) {
        return res.status(500).json({
            mensaje: error
        })
    }
}

const updateProyecto = async (req= request, res = response) => {
    try {
        const id = req.params.id
        const body = req.body

        body.fechaActualizacion = new Date()

        const proyecto = await Proyecto.findByIdAndUpdate(id, body, {new: true}) 
        return res.status(201).json(proyecto)
    } catch (error) {
        return res.status(500).json({
            mensaje: error
        })
    }
}

const deleteProyecto = async (req= request, res= response) => {
    try {
        const id = req.params.id

        await Proyecto.findByIdAndDelete(id)

        return res.status(204).json({
            mensaje: 'Proyecto BORRADO'
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: error
        })
    }
}

module.exports={
    createProyecto,
    readProyecto,
    updateProyecto,
    deleteProyecto
}