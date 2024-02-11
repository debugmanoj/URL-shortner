import React from 'react'

function AllLinkeItems({val,key,index}) {
    console.log(val);
  return <>
           <tr>
            <th scope="row">{index}</th>
            <td>{val.name}</td>
            <td>{val.link}</td>
            <td><a className='btn ownButton' target='_blank' href={val.link}>{val.link}</a></td>
          </tr>
  </>
}

export default AllLinkeItems