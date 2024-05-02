const {Router} = require('express')
const { 
    createProyecto, 
    readProyecto, 
    updateProyecto, 
    deleteProyecto 
} = require('../controllers/proyectoControllers')

const router = Router()

router.post('/', createProyecto)
router.get('/', readProyecto)
router.put('/:id', updateProyecto)
router.delete('/:id', deleteProyecto)

module.exports = router