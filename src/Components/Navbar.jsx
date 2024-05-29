import React from 'react';
import '../App.css'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between px-3">
        <div className="container-fluid">
          <a className="navbar-brand fs-2" href="#"><span style={{color: '#17F7D5 '}}>Hidan</span><span style={{color: '#B90028 '}}>.Dev</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
           <div className="links d-flex justify-centent-center align-items-center gap-5 fs-2 ">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">Projects</a>
            <a className="nav-link" href="#">Contact</a>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

            
           </div>
           
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
