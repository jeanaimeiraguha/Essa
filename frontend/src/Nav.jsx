import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
     <>
    
    <div>
<nav className='justify-content-end d-flex bg-success p-3'>
      <h2 className='' style={{marginRight:"910px"}}> Essa </h2>
<Link to="/" className='text-decoration-none  text-white' style={{padding:"4px",marginLeft:"13px"}}>Home</Link>
<Link to="/selecttrain"  className='text-decoration-none text-white'  style={{padding:"4px",marginLeft:"13px"}}>Trades</Link>
<Link to="selecttr" className='text-decoration-none  text-white' style={{padding:"4px", marginLeft:"13px"}}>Trainees</Link>
<Link className='text-decoration-none  text-white  ' style={{padding:"4px" ,marginLeft:"13px"}}>Report</Link>
<Link className='text-decoration-none  text-danger fw-bold ' style={{padding:"4px" ,marginLeft:"13px"}}>Logout</Link>

</nav>
<h1  className='text-center fw-bold text-white dispalay-4' style={{marginTop:"232px"}}>Welcome To Essa Nyarugunga school Assessment system</h1>
    </div>
    </>
  )
}

export default Nav