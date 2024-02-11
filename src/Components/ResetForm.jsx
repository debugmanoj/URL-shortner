import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import AxiosService from '../utils/Axios'
import apiRoutes from '../Routes/APIRoutes'

function ResetForm() {
    let {token,email}=useParams()
    let [showForm,setshowForm]=useState(false)
    let [showText,setShowText]=useState("You are not allowed")

    const getData=async()=>{
        try {
            let result=await AxiosService.post(`${apiRoutes.checkResetPassword.path}/${token}/${email}`)

            if(result.status==200){
                
                setshowForm(true)
                setShowText()
                
      
            }

        } catch (error) {
            console.log(error.response.data.message)
        }
    }
    const handlePasswordReset=async(e)=>{
        e.preventDefault();
        const form=new FormData(e.target)
        const formprops=Object.fromEntries(form);
        
        try {
            let updatePass=await AxiosService.post(`${apiRoutes.updatePassword.path}/${email}`,formprops)    
            if(updatePass.status==200){
                setshowForm(false)
                setShowText("All set Your are ready for sign In 😊")
            }
        } catch (error) {
            console.log(error.response.data.message);
        }
        

    }

    useEffect(()=>{
        getData()

    },[])
  return <>
  {
    showForm?<>
<div className='text-center'>
<form onSubmit={handlePasswordReset}>
  <div className="form-group">
    <label className='mt-5' htmlFor="exampleInputEmail1">New Password</label>
    <input type="password" className="form-control text-center mt-5" id="exampleInputEmail1" aria-describedby="emailHelp" name='password' placeholder="Enter New Password"/>
    
  </div>
  
  <button type="submit" className="mt-3 btn btn-primary">Submit</button>
</form>
</div>

    </>:
    <>
    <div className='text-center  ' style={{"fontWeight":"bold","marginTop":"20%"}}>

        {showText}
    </div>
    </>
      }
  </>
}

export default ResetForm