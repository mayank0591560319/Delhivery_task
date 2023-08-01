import {useState} from 'react'
import Layout from '../../components/Layout/Layout'

import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/auth';

const Login = () => {
    
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[auth,setAuth]=useAuth()
   
    const navigate =useNavigate();
    const location=useLocation();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const res=await axios.post('/api/v1/auth/login',{email,password});
    if(res && res.data.success){
        toast.success(res && res.data.message);
        setAuth({
            ...auth,
            user:res.data.user,
            token:res.data.token,

        });
        localStorage.setItem('auth',JSON.stringify(res.data));
        navigate(location.state||"/ ");
    }else{
        toast.error(res.data.message);
       
        
    }
        } catch (error) {
            console.log(error);
            toast.error('Something Went Wrong')
        }
        

    }
  return (
    
    
    <Layout title="SignUp ECommerce-App">
      
          

          
      <div className='form-container'>
      <div className="col-md-18 ">
          

          <img
            src="/images/img4.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
            
            
         />
        </div>
      
        <h1>Login Portal</h1>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    
   
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
  
  </div>
<div className='mb-3'>
<button type="submit" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>Forgot Password</button>

</div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

      </div>
    </Layout>

  )
}

 


export default Login
