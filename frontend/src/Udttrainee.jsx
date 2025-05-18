import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Udttrainee = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [gender, setGender] = useState("");
    const [t_id, setT_id] = useState("");
    const { tid } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/traineeupd/${tid}`)
            .then((res) => {
                setFname(res.data.fname);
                setLname(res.data.lname);
                setGender(res.data.gender);
                setT_id(res.data.t_id);
            })
            .catch((err) => {
                console.log("Failed to fetch trainee data");
            });
    }, [tid]);

    const handleUpdate = () => {
        axios.put(`http://localhost:3000/traineeupd/${tid}`, {
            fname,
            lname,
            gender,
            t_id
        })
        .then((res) => {
            alert("Trainee record updated successfully");
        })
        .catch((err) => {
            console.log("Failed to update trainee data" ,err);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdate();
    };

    return (
        <div>
            <h2>Update Trainee</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" value={fname} onChange={e => setFname(e.target.value)} /> <br />

                <label>Last Name</label>
                <input type="text" value={lname} onChange={e => setLname(e.target.value)} /> <br />

                <label>Gender</label>
                <select value={gender} onChange={e => setGender(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select> <br />

                <label>Trade Id</label>
                <input type="text" value={t_id} onChange={e => setT_id(e.target.value)} /> <br />

                <button type='submit'>Update</button>
            </form>
        </div>
    );
};

export default Udttrainee;
