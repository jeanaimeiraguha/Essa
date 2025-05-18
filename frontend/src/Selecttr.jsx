import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Selecttr = () => {
    const { t_id } = useParams();

    const handleDelete = (t_id) => {
        axios.delete(`http://localhost:3000/deltrainee/${t_id}`)
            .then(() => {
                alert("Trainee deleted successfully");
                // Optionally, refresh the trainee list here
                setTrade(trade.filter(item => item.t_id !== t_id));
            })
            .catch((err) => {
                console.log("Failed", err);
            });
    };

    const [trade, setTrade] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/selecttrainees')
            .then((res) => {
                setTrade(res.data);
            });
    }, []);

    return (
        <div className="container my-5" style={{marginBottom:"100%"}}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-primary">Trainee List</h2>
                <Link to="/insrttrain" className="btn btn-primary">Add New Trainee</Link>
            </div>

            <table className="table table-bordered table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Trade Id</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {trade.map((data) => (
                        <tr key={data.t_id}>
                            <td>{data.fname}</td>
                            <td>{data.lname}</td>
                            <td>{data.gender}</td>
                            <td>{data.t_id}</td>
                            <td>
                                <Link to={`/udttrainee/${data.t_id}`} className="btn btn-success btn-sm me-2">Edit</Link>
                                <button onClick={() => handleDelete(data.t_id)} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Selecttr;
