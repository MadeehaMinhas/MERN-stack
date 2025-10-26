import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditExercise() {
  const { id } = useParams();
  const [form, setForm] = useState({ username: '', description: '', duration: '', date: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/exercises/${id}`)
      .then(res => setForm({...res.data, date: res.data.date.slice(0,10)}))
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/exercises/update/${id}`, form)
      .then(() => navigate('/'))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <input name="username" placeholder="Username" value={form.username} onChange={handleChange} className="form-control" required />
  </div>
  <div className="mb-3">
    <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="form-control" required />
  </div>
  <div className="mb-3">
    <input name="duration" type="number" placeholder="Duration (min)" value={form.duration} onChange={handleChange} className="form-control" required />
  </div>
  <div className="mb-3">
    <input name="date" type="date" value={form.date} onChange={handleChange} className="form-control" required />
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
</form>

  );
}

export default EditExercise;
