/**
 * route: host + /api/events
 */

const { Router } = require('express')
const { check } = require('express-validator')
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events')
const { isDate } = require('../helpers/isDate')
const { validateFiels } = require('../middlewares/validateFields')
const { validateJWT } = require('../middlewares/validateJWT')
const router = Router()

router.use(validateJWT)

router.get('/', getEvents)
router.post('/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Start es obligatorio').custom(isDate),
        check('end', 'End es obligatorio').custom(isDate),
        validateFiels
    ],
    createEvent)
router.put('/:id', updateEvent)
router.delete('/:id', deleteEvent)


module.exports = router