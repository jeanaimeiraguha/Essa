import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Mupdate = () => {
    const { tid } = useParams();
    const navigate = useNavigate();

    const [t_id, setT_id] = useState('');
    const [m_name, setM_name] = useState('');
    const [f_assessment, setF_assessment] = useState('');
    const [s_assessment, setS_assessment] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:3000/mselectupd/${tid}`)
            .then((res) => {
                setT_id(res.data.t_id);
                setM_name(res.data.m_name);
                setF_assessment(res.data.f_assessment);
                setS_assessment(res.data.s_assessment);
            })
            .catch((err) => {
                console.log("Failed to fetch data", err);
                alert("Failed to fetch data");
            });
    }, [tid]);

    const handleUpdate = (e) => {
        e.preventDefault();
        
        axios.put(`http://localhost:3000/mupdate/${tid}`, {
            t_id, m_name, f_assessment, s_assessment
        })
        .then(() => {
            alert("Marks updated successfully");
            navigate('/mselect');
        })
        .catch((err) => {
            console.log("Failed to update record", err);
            alert("Failed to update record");
        });
    };

    return (
        <div className="container my-5">
            <div className="card shadow-lg p-4">
                <h2 className="text-center mb-4 text-primary">Update Student Marks</h2>
                
                <form onSubmit={handleUpdate}>
                    <div className="row">
                        
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Module Name</label>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Enter module"
                                value={m_name}
                                onChange={(e) => setM_name(e.target.value)}
                                required
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Formative Assessment</label>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Enter formative assessment"
                                value={f_assessment}
                                onChange={(e) => setF_assessment(e.target.value)}
                                required
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Summative Assessment</label>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Enter summative assessment"
                                value={s_assessment}
                                onChange={(e) => setS_assessment(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary">Update</button>
                        <button 
                            type="button" 
                            className="btn btn-secondary" 
                            onClick={() => navigate('/mselect')}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Mupdate;
