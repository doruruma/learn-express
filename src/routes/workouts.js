const router = require('express').Router()

// get all
router.get('/', (req, res) => {
  res.json({ title: 'workouts' })
})

// get one
router.get('/:id', (req, res) => {
  res.json({ title: 'one workout' })
})

// store workout
router.post('/', (req, res) => {
  res.json({ title: 'workout stored' })
})

// update workout
router.patch('/:id', (req, res) => {
  res.json({ title: 'workout updated' })
})

// delete workout
router.delete('/:id', (req, res) => {
  res.json({ title: 'workout deleted' })
})

module.exports = router