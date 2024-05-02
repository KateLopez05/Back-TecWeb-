const Clientes = require ('../models/cliente')
const {request, response} = require('express')

const createCliente = async (req= request, res= response) => {
    try {
        const body = req.body
        const cliente = new Clientes(body)

        await cliente.save()
        return res.status(201).json(cliente)
    } catch (error) {
        return res.status(500).json({
            mensaje: error
        })
    }
}

const readCliente = async (req= request, res= response) => {
    try {
        const cliente= req.query.cliente
        const clientes = await Clientes.find()

        return res.json(clientes)
    } catch (error) {
        return res.status(500).json({
            mensaje: error
        })
    }
}

const updateCliente = async (req= request, res= response) => {
    try {
        const id = req.params.id
        const body = req.body

        body.fechaActualizacion = new Date()

        const clientes = await Clientes.findByIdAndUpdate(id, body, {new: true})
        return res.status(201).json(clientes)
    } catch (error) {
        return res.status(500).json({
            mensaje:error
        })
    }
}

const deleteCliente = async (req= request, res= response) => {
    try {
        const id= req.params.id

        await Clientes.findByIdAndDelete(id)

        return res.status(204).json({
            mensaje: 'Cliente BORRADO'
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: error
        })
    }
}

module.exports = {
    createCliente,
    readCliente, 
    updateCliente,
    deleteCliente
}