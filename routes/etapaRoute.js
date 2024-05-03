const {Router} = require('express')
const { 
    createEtapa, 
    readEtapa, 
    updateEtapa, 
    deleteEtapa 
} = require('../controllers/etapaControllers')

const router = Router()

router.post('/', createEtapa)
router.get('/', readEtapa)
router.put('/:id', updateEtapa)
router.delete('/:id', deleteEtapa)

module.exports = router