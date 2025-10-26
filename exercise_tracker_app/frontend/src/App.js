import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExerciseList from './components/ExerciseList';
import CreateExercise from './components/CreateExercise';
import EditExercise from './components/EditExercise';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Exercise Tracker</h2>
        <Routes>
          <Route path="/" element={<ExerciseList />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/edit/:id" element={<EditExercise />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
