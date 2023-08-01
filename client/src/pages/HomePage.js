import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth';
const HomePage = () => {
  const[auth,setAuth]=useAuth();
  return (
    <Layout title={'Dashboard'}>
      <div className="col-md-18 ">
          

          <img
            src="/images/img7.jpg"
            alt="contactus"
            style={{ width: "100%" }}
            
            
         />
         
        </div>
       <div>
  <div className='bold'>
    <label htmlFor="formFileLg" className="form-label">Upload your File Here!!</label>
    <input className="form-control form-control-lg" id="formFileLg" type="file" />
  </div>
</div>

        <h1>HomePage</h1>
        <pre>{JSON.stringify(auth,null,4)}</pre>
        
        
    </Layout>
  );
};

export default 
HomePage
