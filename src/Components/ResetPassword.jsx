import React, { useState } from 'react'
import AxiosService from '../utils/Axios'
import apiRoutes from '../Routes/APIRoutes'


function ResetPassword() {
  let [handleError,setHandleError]=useState()
  let [mail,setMail]=useState()
    let handleSubmit=async(e)=>{
        e.preventDefault()
        const formdata=new FormData(e.target)
        const formProps = Object.fromEntries(formdata);

        try {
          let result=await AxiosService.post(`${apiRoutes.resetPassword.path}`,formProps)

          if(result.status==200){
            setMail("Check the registered email "+" ✉️ \n Thank You")
          }


        } catch (error) {
            setHandleError(error.response.data.message+"😊")
        }
    }
  return <>
      <h1 className="text-center">Reset Password</h1>
  <div className='text-center text mt-5'>

  
<form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1" className='mt-5'>Email address</label>
    <input onChange={()=>setHandleError()} type="text" className="form-control  center-text mt-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  name='email'/>
  </div>

  <button type="submit" className="btn btn-primary mt-3">Submit</button>
</form>
</div>
<div >
  <h6 className='text-center mt-5' style={{"color":"red","fontWeight":"bold"}}>{handleError} </h6>
</div>
<div >
  <h6 className='text-center mt-5' style={{"fontWeight":"bold"}}>{mail} </h6>
</div>
  </>
}

export default ResetPassword