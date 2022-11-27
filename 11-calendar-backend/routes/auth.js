/**
 * route: host + /api/auth
 */

const { Router } = require('express')
const { createUser, loginUser, revalidateToken } = require('../controllers/auth')
const router = Router()

router.post('/', loginUser)

router.post('/new', createUser)

router.post('/renew', revalidateToken)

module.exports = router