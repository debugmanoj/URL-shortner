import React,{useState} from 'react'
import AxiosService from '../utils/Axios'
import apiRoutes from '../Routes/APIRoutes'
import { useNavigate } from 'react-router'
function signIn() {
  let navigate=useNavigate()
    let [existemail,setExistemail]=useState(false) //Mail oda box change panna
    let [handleErrorMail,sethandleErrorMail]=useState() //Mail error oda text api kitta vaangurathu naala
    let [incorrectpass,setIncorrectpass]=useState(false) //Incorrect pass oda field aa highlight panrathu
    let [handleErrorPass,sethandleErrorPass]=useState()//pass oda error text aa print panrathukku
    let [activate,setActivate]=useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const formdata=new FormData(e.target)
        const formProps = Object.fromEntries(formdata);
        try {
          let data=await AxiosService.post(`${apiRoutes.signIn.path}`,formProps)
          if(data.status===200){
            
            navigate(`/home/${data.data.email}`)
            
          }
        
        } catch (error) {
           if(error.response && error.response.status===400){
            // console.log(error.response.data.message)
            let checker=error.response.data.checks
            if(checker=="mailAlready"){
              setExistemail(true)
              sethandleErrorMail(error.response.data.message)

            }
            else if(checker==="incorrectpassword"){
              setIncorrectpass(true)
              sethandleErrorPass(error.response.data.message)


            }
            else{
              setActivate(error.response.data.message)
            }
          }
          else {
            console.error("An error occurred:", error);
          
          }
          
        }
        

    }
    return <>
    <h1 className="text-center">Sign In</h1>
    <div className='text-center text mt-5'>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        {
          existemail? <>
          <label htmlFor="exampleInputEmail1"  className='mb-3'> Email</label>
          <input onChange={()=>setExistemail(false)} style={{"border":"1px solid red"}} type="text" className="form-control center-text" id="exampleInputEmail1" aria-label="Email" name='email' placeholder="Enter Email"/>
          <small style={{"color":"red","fontWeight":"bold"}}>{handleErrorMail}</small>
          </>
          :
          <>
          <label htmlFor="exampleInputEmail1"  className='mb-3'> Email</label>
          <input type="text" className="form-control center-text" id="exampleInputEmail1" aria-label="Email" name='email' placeholder="Enter Email"/>
          </>
        }
       
      </div>
      <br/>
      <div className="form-group">

        {
                    incorrectpass? <>
                           <label htmlFor="exampleInputPassword1"  className='mb-3'>Password</label>
                    <input onChange={()=>setIncorrectpass(false)} style={{"border":"1px solid red"}} type="text" className="form-control center-text" id="exampleInputEmail1" aria-label="Email" name='email' placeholder="Enter Email"/>
                    <small style={{"color":"red","fontWeight":"bold"}}>{handleErrorPass}</small>
                    </>
                    :
                    <>
                    <label htmlFor="exampleInputPassword1"  className='mb-3'>Password</label>
                    <input  type="password" className="form-control center-text" id="exampleInputPassword1" aria-label="password" name='password' placeholder="Enter Password"/>

                    </>
        }
        
      </div>
      <br/>
      <button type='submit' className="btn btn-primary">Submit</button>
      <br />
      <br />
      <br />
      <small className='mt-5'>Forgotten Password ? no worries  😊<a onClick={()=>navigate("/resetPassword")} className='btn ownButton mx-3'>Reset Password</a></small>

    </form>
   {
    <h5 className='mt-5' style={{"color":"red"}}>{activate}</h5>
   }
    </div>

  </>
}

export default signIn