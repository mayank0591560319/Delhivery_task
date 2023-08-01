import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'

import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[phone,setPhone]=useState("")
    const[DOB,setDOB]=useState("")
    const[address,setAddress]=useState("")
    const[answer,setAnswer]=useState("")
    const navigate =useNavigate();
    //form function
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/api/v1/auth/register", {
          name,
          email,
          password,
          phone,
          DOB,
          address,
          answer
        });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
          navigate("/login");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
  return (
    <Layout title="SignUp ">
    
        
        <div className='form-container'>
        
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
  <div className="col-md-12 ">
          

          <img
            src="/images/img2.jpg"
            alt="contactus"
            style={{ width: "100%" }}
            
            
          />
        </div>
    Name<input type="text" 
    value={name}
    onChange={(e)=>setName(e.target.value)}
    className="form-control" id="exampleInputEmail1" 
    placeholder='Enter your name' required
    />

    
  </div>
  <div className="mb-3">
    
    Email<input type="email" 
     value={email}
     onChange={(e)=>setEmail(e.target.value)}
    className="form-control" id="exampleInputEmail1" 
    placeholder='Enter your Email' required
    />
    
    
  </div>
  <div className="mb-3">
    
    Password<input type="password" 
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
    className="form-control" id="exampleInputPassword1"
    placeholder='Enter your password'  required
    />
    
  </div>
  <div className="mb-3">
    
    Phone Number<input type="number" 
     value={phone}
     
     onChange={(e)=>setPhone(e.target.value)}
    className="form-control" id="exampleInputEmail1" 
    placeholder='Enter your Phone Number' required
    />

  </div>
  <div className="mb-3">
   
  D.O.B <input type="date" 
    value={DOB}
    onChange={(e)=>setDOB(e.target.value)}
   className="form-control" id="exampleInputEmail1" 
    placeholder='Enter your Date of Birth'  required
    />
    
    
  </div>
  
  <div className="mb-3">
   
   Address <input type="text-box" 
    value={address}
    onChange={(e)=>setAddress(e.target.value)}
   className="form-control" id="exampleInputEmail1" 
    placeholder='Enter your Address'  required
    />
    
    
  </div>
  <div className="mb-3">
   
   Answer <input type="text-box" 
    value={answer}
    onChange={(e)=>setAnswer(e.target.value)}
   className="form-control" id="exampleInputEmail1" 
    placeholder='Who is your Best Friend?'  required
    />
    
    
  </div>
  
  
    
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

      </div>
    </Layout>
  )
}

export default Register

