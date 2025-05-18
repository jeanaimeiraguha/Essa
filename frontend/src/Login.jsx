import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Login = () => {
     const navigate=useNavigate()
     const [name,setName]=useState("")
     const [password,setPassword]=useState("")
     const handleSubmit=(e)=>{
          e.preventDefault();
          axios.post("http://localhost:3000/login",{name,password})
          .then((res)=>{
               alert(`Welcome ${name}`)
               navigate('/nav')
          })
          .catch((err)=>{
               console.log("Failed")
               alert("Invalid credentials")
          })
     }
  return (
    <div>
    <h2 className='text-center mt-4 text-primary'>Login Here</h2>
      <div className='d-flex justify-content-center pt-4'>
        <form onSubmit={handleSubmit} className='bg-light p-4 rounded shadow-sm w-50'>
          <div className='mb-3'>
            <label className='form-label'>  Name</label>
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
              type="text" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              className='form-control' 
              placeholder="Enter your name"
              required
            />
          </div>
          <button className='btn btn-success w-10 me-2'>Login </button>
          
        </form>
      </div>
    </div>
  )
}

export default Login