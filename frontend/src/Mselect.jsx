import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Mselect = () => {
    const [marks, setMarks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/mselect')
            .then((res) => {
                setMarks(res.data);
            })
            .catch((err) => {
                console.log("Failed to fetch data", err);
                alert("Failed to fetch data");
            });
    }, []);

    const handleDelete = (tid) => {
        axios.delete(`http://localhost:3000/mdelete/${tid}`)
            .then(() => {
                alert("Record deleted successfully");
                setMarks(marks.filter((item) => item.tid !== tid));
            })
            .catch((err) => {
                console.log("Failed to delete record", err);
                alert("Failed to delete record");
            });
    };

    return (
        <div className="container my-5">
            <Link to="/minserted" className="btn btn-primary mb-4">Add New</Link>
            <h2 className="text-center text-white mb-4">Student Marks</h2>

            <table className="table table-striped table-hover table-bordered table-responsive">
                <thead className="table-dark">
                    <tr>
                        <th>Trade Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Formative Assessment</th>
                        <th>Summative Assessment</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {marks.map((data) => (
                        <tr key={data.tid}>
                            <td>{data.tid}</td>
                            <td>{data.t_id}</td>
                            <td>{data.m_name}</td>
                            <td>{data.f_name}</td>
                            <td>{data.f_assessment}</td>
                            <td>{data.s_assessment}</td>
                            <td>
                                <Link to={`/mupdate/${data.tid}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                                <button 
                                    className="btn btn-danger btn-sm" 
                                    onClick={() => handleDelete(data.tid)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Mselect;
