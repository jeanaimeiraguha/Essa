import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


//    useEffect(() => window.onpopstate = () => history.go(1), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/register", { name, password })
      .then((res) => {
        alert(`Welcome ${name}`);
        navigate('/');
      })
      .catch((err) => {
        console.error("Login failed:", err);
     //    alert("Invalid credentials");
      });
  };

  return (
    <div>
      <h2 className='text-center mt-4 text-primary'>Sign up Here</h2>
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
          <button className='btn btn-sm btn-info me-2'>Login</button>
          {/* <button className='btn btn-success w-100'>Login</button>
           */}
           <Link className='btn btn-success btn-sm'>Create Account</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
