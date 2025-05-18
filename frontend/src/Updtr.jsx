import axios from 'axios';
// import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Updtr = () => {
     const navigate=useNavigate()
      const handleUpdate=()=>{
               axios.put(`http://localhost:3000/updtrade/${id}`,{name})
               .then((res)=>{
                    alert("Update successfully")
                    navigate('/selecttr')
               })
               .catch((err)=>{
                    console.log("failed")
               })
          }
     const [name,setName]=useState("");
     const {id}=useParams()
     const handleSubmit=(e)=>{
e.preventDefault()
handleUpdate()
     }
     useEffect(()=>{
          axios.get(`http://localhost:3000/selectupd/${id}`)
          .then((res)=>{
               setName(res.data.name)
          })
         

     },[id])
  return (
  <>
      <h2 className='text-center mt-4 text-primary'>Update</h2>
      <div className='d-flex justify-content-center pt-4'>
        <form onSubmit={handleSubmit} className='bg-light p-4 rounded shadow-sm w-50'>
          <div className='mb-3'>
            <label className='form-label'>Trade Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              className='form-control' 
              placeholder="Enter your name"
              required
            />
          </div>
          
          <button className='btn btn-success w-10 me-2'>Update</button>
     
        </form>
      </div>
      </>
   
  )
}

export default Updtr
