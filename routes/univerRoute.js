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
router.put('/', updateUniversidad)
router.delete('/', deleteUniversidad)

module.exports = router