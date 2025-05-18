// Importing necessary modules
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Insrttrain = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [gender, setGender] = useState("");
    const [t_id, setT_id] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/addtrainees', { fname, lname, gender, t_id })
            .then((res) => {
                alert("Trainee added successfully");
                navigate('/selecttr');
            })
            .catch((err) => {
                console.error("Failed to add trainee");
            });
    };

    return (
        <div className="container mt-5 w-50">
            <h2 className="text-center text-white mb-4">Add New Trainee</h2>
            <form onSubmit={handleSubmit} className="card p-4 shadow">
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" value={fname} onChange={(e) => setFname(e.target.value)} placeholder="Enter First Name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" value={lname} onChange={(e) => setLname(e.target.value)} placeholder="Enter Last Name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <select className="form-select" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Trade ID</label>
                    <input type="text" className="form-control" value={t_id} onChange={(e) => setT_id(e.target.value)} placeholder="Enter Trade ID" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Add New</button>
            </form>
        </div>
    );
};

export default Insrttrain;