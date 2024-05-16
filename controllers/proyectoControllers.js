const Proyecto = require('../models/proyecto')
const { request, response } = require('express')

const Cliente = require("../models/cliente")
const Etapa = require("../models/etapa")
const TipoProyecto = require("../models/tipoProyecto")
const Universidad = require("../models/universidad")

const createProyecto = async (req = request, res = response) => {
    try {
        const data = req.body
        const { cliente, etapa, tipoProyecto, universidad } = data;

        //CLIENTE
        const clienteBD = Cliente.findOnde({
            _id: cliente._id
        })
        if (!clienteBD) {
            return res.status(400).json({
                mensagge: 'cliente invalidado'
            })
        }

        //ETAPA 
        const etapaBD = Etapa.findOne({
            _id: etapa._id
        })
        if(!etapaBD) {
            return res.status(400).json({
                mensagge: 'etapa invalidada'
            })
        }

        //TIPO DE PROYECTO
        const tipoProyectoBD = TipoProyecto.findOne({
            _id: tipoProyecto._id
        })
        if (!tipoProyectoBD) {
            return res.status(400).json({
                mensagge: 'tipo de proyecto invalidado'
            })
        }

        //UNIVERSIDAD
        const universidadBD = Universidad.findOne({
            _id: universidad._id
        })
        if (!universidadBD){
            return res.status(400).json({
                mensagge: 'universidad invalida'
            })
        }

        const proyecto = new Proyecto(data)
        await proyecto.save()
        return res.status(201).json(proyecto)

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error general' + error
        })
    }
}

const readProyecto = async (req = request, res = response) => {
    try {
        const proyectosDB = await Proyecto.find()
        .populate({
            path: 'cliente'
        })
        .populate({
            path: 'etapa'
        })
        .populate({
            path: 'tipoProyecto'
        })
        .populate({
            path: 'universidad'
        })

        return res.json(proyectosDB)
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error general'+ error
        })
    }
}

const updateProyecto = async (req = request, res = response) => {
    try {
        const { id } = req.params.id
        const data = req.body

        data.fechaActualizacion = new Date()

        const proyecto = await Proyecto.findByIdAndUpdate(id, data, { new: true })
        return res.status(201).json(proyecto)
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error'
        })
    }
}

const deleteProyecto = async (req = request, res = response) => {
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

module.exports = {
    createProyecto,
    readProyecto,
    updateProyecto,
    deleteProyecto
}