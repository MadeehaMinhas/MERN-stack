const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const exercisesRouter = require('./routes/exercises');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/exercisetracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
app.use('/api/exercises', exercisesRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
