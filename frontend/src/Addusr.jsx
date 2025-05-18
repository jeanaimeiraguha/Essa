import React, { useState } from 'react';
import axios from 'axios';

const Addusr = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/adduser', { name, password })
      .then((res) => {
        alert("Account created successfully");
      })
      .catch((err) => {
        console.log("Failed");
      });
  };

  return (
    <>
      <h2 className='text-center mt-4 text-primary'>Sign Up</h2>
      <div className='d-flex justify-content-center pt-4'>
        <form onSubmit={handleSubmit} className='bg-light p-4 rounded shadow-sm w-50'>
          <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              className='form-control' 
              placeholder="Enter your name"
              required
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              className='form-control' 
              placeholder="Enter your password"
              required
            />
          </div>
          <button className='btn btn-success w-10 me-2'>Sign Up</button>
          <button className='btn btn-success w-10'>Login</button>
        </form>
      </div>
    </>
  );
};

export default Addusr;
