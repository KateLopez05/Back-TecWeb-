const {Router} = require('express')

const { 
    createUniversidad, 
    readUniversidad, 
    updateUniversidad, 
    deleteUniversidad 
} = require('../controllers/univerControllers')

const router = Router()

router.post('/', createUniversidad)
router.get('/', readUniversidad)
router.put('/:id', updateUniversidad)
router.delete('/:id', deleteUniversidad)

module.exports = router