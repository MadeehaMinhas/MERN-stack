import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ExerciseList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/exercises')
      .then(res => setExercises(res.data))
      .catch(err => console.log(err));
  }, []);

  const deleteExercise = (id) => {
    axios.delete(`http://localhost:5000/api/exercises/${id}`)
      .then(() => setExercises(exercises.filter(e => e._id !== id)))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Link to="/create" className="btn btn-primary mb-3">Create New Exercise</Link>
      {exercises.length === 0 ? (
        <p>No exercises found.</p>
      ) : (
        <div className="row">
          {exercises.map(e => (
            <div className="col-md-6 mb-3" key={e._id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{e.username}</h5>
                  <p className="card-text">
                    <strong>Description:</strong> {e.description} <br />
                    <strong>Duration:</strong> {e.duration} min <br />
                    <strong>Date:</strong> {new Date(e.date).toDateString()}
                  </p>
                  <Link to={`/edit/${e._id}`} className="btn btn-warning me-2">Edit</Link>
                  <button onClick={() => deleteExercise(e._id)} className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExerciseList;
