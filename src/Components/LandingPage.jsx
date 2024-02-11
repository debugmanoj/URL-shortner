import React from 'react'
import { useNavigate } from 'react-router'

function LandingPage() {
    let navigate=useNavigate();
  return  <> <main>
  <div className="containers">
      <h3 > URL Simplifier</h3>
      <div className="urlSubOne">
          <h5 >We can convert a long url into a readable url</h5>
          <div>
              <div>
                  <p>Trust Us &nbsp; 😊</p>
              <h4>Shrink url with sign up</h4>
        
    <a onClick={()=>navigate("/signUp")} className="btn ml-2">Sign Up</a>

              
              </div>
              
          </div>

          
      </div>

  </div>
</main>
</>
}

export default LandingPage