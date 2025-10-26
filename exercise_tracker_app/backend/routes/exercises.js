const router = require('express').Router();
let Exercise = require('../models/Exercise');

// Get all exercises
router.get('/', async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.json(exercises);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Add a new exercise
router.post('/add', async (req, res) => {
    const { username, description, duration, date } = req.body;
    const newExercise = new Exercise({ username, description, duration, date });

    try {
        await newExercise.save();
        res.json('Exercise added!');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Get exercise by id
router.get('/:id', async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id);
        res.json(exercise);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Delete exercise
router.delete('/:id', async (req, res) => {
    try {
        await Exercise.findByIdAndDelete(req.params.id);
        res.json('Exercise deleted.');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Update exercise
router.put('/update/:id', async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id);
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = req.body.duration;
        exercise.date = req.body.date;
        await exercise.save();
        res.json('Exercise updated!');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

module.exports = router;
