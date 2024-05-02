const { 
    createTipo, 
    readTipo, 
    updateTipo, 
    deleteTipo 
} = require('../controllers/tipoProControllers')

const {Router} = require('express')

const router = Router()

router.post('/', createTipo)
router.get('/', readTipo)
router.put('/:id', updateTipo)
router.delete('/:id', deleteTipo)

module.exports = router