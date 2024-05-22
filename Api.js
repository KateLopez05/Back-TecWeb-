const express = require('express')
const {MongoConection} = require('./database/config')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()

MongoConection()

app.use(
    cors({
        origin: '*'
    })
)

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const tipoProyecto = require('./routes/tipoProRoute')
const clientes = require('./routes/clienteRoute')
const universidad = require('./routes/univerRoute')
const etapa = require('./routes/etapaRoute')

app.use('/api/v1/tipoProyecto', tipoProyecto)
app.use('/api/v1/cliente', clientes)
app.use('/api/v1/universidad', universidad)
app.use('/api/v1/etapa', etapa)

app.get("*", (req, res) => {
    return res.status(404).json({
        mensagge: 'No encontrado',
        status: 404
    })
})

module.exports = app