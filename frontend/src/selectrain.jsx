// Importing necessary modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Selecttrain = () => {
    const [trade, setTrade] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/selecttrade')
            .then((res) => {
                setTrade(res.data);
            })
            .catch((err) => {
                console.error("Failed to fetch trades", err);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/deltrade/${id}`)
            .then(() => {
                alert("Trade deleted successfully");
                setTrade(trade.filter(item => item.id !== id));
            })
            .catch((err) => {
                console.error("Failed to delete trade", err);
            });
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between mb-4">
                <h2 className='text-white'>Trade List</h2>
                <Link to="/addtr" className="btn btn-primary">Add New Trade</Link>
            </div>
            <table className="table table-bordered table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Trade ID</th>
                        <th>Trade Name</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {trade.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>
                                <Link to={`/updtr/${data.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(data.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Selecttrain;
