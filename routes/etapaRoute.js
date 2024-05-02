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
router.put('/:nombre', updateEtapa)
router.delete('/:nombre', deleteEtapa)

module.exports = router