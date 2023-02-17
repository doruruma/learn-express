const Workout = require('../models/Workout')
const mongoose = require('mongoose')

// get all
const getAll = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })
    // response
    res.status(200).json(workouts)
}

// get one
const get = async (req, res) => {
    const { id } = req.params
    // check params id type
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(204).json('')
    // get workout
    const workout = await Workout.findById(id)
    if (!workout)
        return res.status(204).json('')
    // response
    res.status(200).json(workout)
}

// store
const store = async (req, res) => {
    const { title, load, reps } = req.body
    // validation
    let emptyFields = []
    if (!title)
        emptyFields.push('title')
    if (!load)
        emptyFields.push('load')
    if (!reps)
        emptyFields.push('reps')
    if (emptyFields.length > 0) {
        return res.status(400)
            .json({ error: 'Please fill in all fields', emptyFields })
    }
    try {
        // insert workout
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        // error
        res.status(400).json({ error: error.message })
    }
}

// update
const update = async (req, res) => {
    const { id } = req.params
    try {
        // update workout
        const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body })
        if (!workout)
            return res.status(204).json('')
        res.status(200).json(workout)
    } catch (error) {
        // error
        res.status(400).json({ error: error.message })
    }
}

// destroy
const destroy = async (req, res) => {
    const { id } = req.params
    // check params id type
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(204).json('')
    // delete workout
    const workout = await Workout.findOneAndDelete({ _id: id })
    if (!workout)
        return res.status(204).json('')
    // response
    res.status(200).json(workout)
}

module.exports = {
    getAll,
    get,
    store,
    update,
    destroy
}