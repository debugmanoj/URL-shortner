import React from 'react'

function ThankYou() {
  return <>
   <div className='text-center' style={{"marginTop":"10%"}} >
    <div className='' style={{"fontWeight":"900","fontSize":"70px"}}>Thank you creating the account</div>
    <small>Ready to shorten Url</small>
    <br />
    <br />
    <br />
    <a className='btn btn-dark' onClick={()=>navigate("/signIn")}>Sign in</a>
  </div>
  </>
  
}

export default ThankYou