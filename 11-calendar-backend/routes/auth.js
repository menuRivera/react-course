/**
 * route: host + /api/auth
 */

const { Router } = require('express')
const { check } = require('express-validator')
const { createUser, loginUser, revalidateToken } = require('../controllers/auth')
const { validateFiels } = require('../middlewares/validateFields')
const { validateJWT } = require('../middlewares/validateJWT')
const router = Router()

router.post('/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
        validateFiels
    ],
    createUser)

router.post('/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
        validateFiels
    ], loginUser)

router.get('/renew', validateJWT, revalidateToken)

module.exports = router