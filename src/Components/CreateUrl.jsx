import React, { useState } from 'react'
import AxiosService from '../utils/Axios'
import apiRoutes from '../Routes/APIRoutes'
import { useParams } from 'react-router'

function CreateUrl() {
    let [validUrl,setValidUrl]=useState()
    let [shortUrl,setshortUrl]=useState()
    let [displayShort,setdisplayShort]=useState(false)
    const {name}=useParams();

    let handleSubmit=async(e)=>{
        e.preventDefault()
        const formdata=new FormData(e.target)
        const formProps = Object.fromEntries(formdata);
     
        try {
            let result=await AxiosService.post(`${apiRoutes.shortUrl.path}/${name}`,formProps)
            if(result.status===200){
                setshortUrl(result.data.result.short_url)
                setdisplayShort(true)
            }
        } catch (error) {
            setValidUrl(error.response.data.message)
        }
    }
  return <>
  <h1 className="mt-5 text-center">Create Shorten Url</h1>
      <div className='text-center text mt-5'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputName " className='mb-3'>Short Name</label>
          <input type="text" className="form-control center-text" id="exampleInputName" aria-label="Name" name='ShortenLinkName' placeholder="Enter Short Name"/>
        </div>
        <br/>
        <div className="form-group">        
            <label htmlFor="exampleInputEmail1"  className='mb-3'> Your Long Url</label>
            <input type="text" onChange={()=>setValidUrl()} className="form-control center-text" id="exampleInputEmail1" aria-label="Email" name='url' placeholder="Enter Long Url"/>
        
    
         
        </div>
        <br/>

        <button type='submit' className="btn btn-primary">Submit</button>
  
      </form>
      <div>
            {
            <h3 className='mt-5' style={{"color":"red"}}>{validUrl}</h3>
            }
      </div>
      <div>
        {
            displayShort?<>
                     <div className="resultUrl">        
         <div className='resultSub'>
         
            <a target="_blank"  className='btn ownButton' href={`${shortUrl}`}>Shrinked Url</a>
            
         </div>
        </div>
            </>:""
        }
        
      </div>
      </div>

  </>
}

export default CreateUrl