const {Router} = require('express')
const {
    createCliente,
    readCliente,
    updateCliente,
    deleteCliente
} = require('../controllers/clienteControllers')

const router = Router()

router.post('/', createCliente)
router.get('/', readCliente)
router.put('/:id', updateCliente)
router.delete('/:id', deleteCliente)

module.exports = router