import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router'
import AxiosService from '../utils/Axios'
import apiRoutes from '../Routes/APIRoutes';
function Authenticate() {
    let navigate=useNavigate()
    const { id } = useParams();
    let [change,setChange]=useState("")

    let Authenticate=async()=>{
        try {
       
            let res=await AxiosService.get(`${apiRoutes.authenticate.path}/${id}`) 
            if(res.status==200){
                // console.log(res.data.data)
                // console.log(res.data.message)
                setChange(change +"Thank you "+ `${res.data.data} ${res.data.message} 😊`)
                
            }
            else if(res.response.status==404){
                console.log(res.response.data)
            }    
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(()=>{
        Authenticate()
    },[])
  return <>
  <div className='welcomeContainer '>
    <div >
    <h5 >{change}</h5>
  <center ><a className='btn  ' onClick={()=>navigate("/signIn")}>Ready for shorten</a></center>
    </div>
  
  </div>

  </>
}

export default Authenticate