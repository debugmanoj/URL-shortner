import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import AxiosService from '../utils/Axios'
import apiRoutes from '../Routes/APIRoutes';
import AllLinkeItems from './AllLinkeItems';

function AllLinks() {
  let [datas,setDatas]=useState()
  const {name}=useParams()
  let getAllData=async()=>{
    try {
      let linkResult=await AxiosService.get(`${apiRoutes.getAllLinks.path}/${name}`)
      if(linkResult.status===200){

        setDatas(linkResult.data.result)
      }
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getAllData()
  },[])
  return <>
      <table className="table mt-5 table-hover ">
        <thead>
          <tr className=''>
            <th scope="col">#</th>
            <th scope="col">Short Name</th>
            <th scope="col">Short Link</th>
            <th scope="col">Shor Link Button</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        {datas && datas.map((val, i) => (
            <AllLinkeItems val={val} index={i} key={i} />
          ))}
    
          

    
        </tbody>
      </table>
  </>
}

export default AllLinks