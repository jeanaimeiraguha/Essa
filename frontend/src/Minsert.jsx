import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Minsert = () => {
  const [tid, setTid] = useState('');
  const [t_id, setT_id] = useState('');
  const [m_name, setM_name] = useState('');
  const [f_assessment, setF_assessment] = useState('');
  const [s_assessment, setS_assessment] = useState('');
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/minsert', { tid, t_id, m_name, f_assessment, s_assessment })
      .then((res) => {
        alert('Marks added successfully');
        navigate('/mselect')
      })
      .catch((err) => {
        console.error('Failed to add marks:', err);
        alert('Failed to add marks');
      });
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ width: '400px' }}>
        <h3 className="card-title text-center mb-4">Add Marks</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Trainee ID</label>
            <input
              type="text"
              className="form-control"
              value={tid}
              onChange={(e) => setTid(e.target.value)}
              placeholder="Enter Trainee ID"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Trade ID</label>
            <input
              type="text"
              className="form-control"
              value={t_id}
              onChange={(e) => setT_id(e.target.value)}
              placeholder="Enter Trade ID"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Module Name</label>
            <input
              type="text"
              className="form-control"
              value={m_name}
              onChange={(e) => setM_name(e.target.value)}
              placeholder="Enter Module Name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Formative Assessment</label>
            <input
              type="text"
              className="form-control"
              value={f_assessment}
              onChange={(e) => setF_assessment(e.target.value)}
              placeholder="Enter Formative Assessment"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Summative Assessment</label>
            <input
              type="text"
              className="form-control"
              value={s_assessment}
              onChange={(e) => setS_assessment(e.target.value)}
              placeholder="Enter Summative Assessment"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Add Marks
          </button>
        </form>
      </div>
    </div>
  );
};

export default Minsert;
