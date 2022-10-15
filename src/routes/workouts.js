const router = require('express').Router()
const { getAll, get, store, update, destroy } = require('../controllers/WorkoutController')

// get all
router.get('/', getAll)

// get one
router.get('/:id', get)

// store workout
router.post('/', store)

// update workout
router.patch('/:id', update)

// delete workout
router.delete('/:id', destroy)

module.exports = router