import React from 'react'
import { Outlet, useNavigate } from 'react-router'
function Home() {
  let navigate=useNavigate();
  return <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">Url Shortener</a>
          
          <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
            <a href="" ><img className="imgRound" src="https://i.pravatar.cc/100" alt=""/> </a>
            
            
            <div className="buttonFlex">
                <a  className="imageNext btn ">Manoj</a>
                
            <a className=" btn btn-dark btn-small" onClick={()=>navigate("AllLinks")} >All Links</a>
            <a className="btn btn-dark btn-small" onClick={()=>navigate("createUrl")}>Create Short url</a>

            </div>
            
       
          </div>
        </div>
      </nav>
  
      <Outlet/>

  </>
}

export default Home