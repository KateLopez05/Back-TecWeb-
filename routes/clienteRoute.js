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
router.put('/:nombre', updateCliente)
router.delete('/:nombre', deleteCliente)

module.exports = router