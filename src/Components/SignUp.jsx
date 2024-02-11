import React, { useState } from 'react';
import AxiosService from '../utils/Axios';
import apiRoutes from '../Routes/APIRoutes';
import { useNavigate } from 'react-router';



function SignUp() {
  let navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault()

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    try {
      let data = await AxiosService.post(`${apiRoutes.signUp.path}`, formProps);
  
      if (data.status === 200) {
        console.log("Hello, I am Added");
        navigate("/signIn")

      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log("Hello, User already exists");
        setExist(true)
      
      } else {
        console.error("An error occurred:", error);
      
      }
    }
  }
  let [exist,setExist]=useState(false)
  return <>
      <h1 className="text-center">Sign Up</h1>
      <div className='text-center text mt-5'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputName " className='mb-3'>Name</label>
          <input type="text" className="form-control center-text" id="exampleInputName" aria-label="Name" name='name' placeholder="Enter Name"/>
        </div>
        <br/>
        <div className="form-group">
          {
            exist? <>
            <label htmlFor="exampleInputEmail1"  className='mb-3'> Email</label>
            <input style={{"border":"1px solid red"}} type="text" className="form-control center-text" id="exampleInputEmail1" aria-label="Email" name='email' placeholder="Enter Email"/>
            <small style={{"color":"red","fontWeight":"bold"}}>Enter another email Address</small>
            </>
            :
            <>
            <label htmlFor="exampleInputEmail1"  className='mb-3'> Email</label><input type="text" className="form-control center-text" id="exampleInputEmail1" aria-label="Email" name='email' placeholder="Enter Email"/>
            </>
          }
         
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1"  className='mb-3'>Password</label>
          <input type="password" className="form-control center-text" id="exampleInputPassword1" aria-label="Password" name='password' placeholder="Password"/>
        </div>
        <br/>
        <button type='submit' className="btn btn-primary">Submit</button>
      </form>
      <div>
        <small>Already have an account ? <a className='btn' style={{"color":"blue","cursor":"pointer"}} onClick={()=>navigate("/signIn")} >Sign In</a> </small>
      </div>
      </div>

    </>
  ;
}

export default SignUp;
