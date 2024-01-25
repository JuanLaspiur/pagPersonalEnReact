import React from 'react';
import './conteiner1.css';
import logo from '../img/logo.webp';

const MyComponent = () => {
  return (
    <div className="container-fluid container1" id="container1">
      <div className="row pt-1 pt-md-5">
        <div className="col-md-6 col-lg-6 text-center pt-5">
          <h2>Hello I'm</h2>
          <h1><img src={logo} alt="Logo" width="139px" /></h1>
          <h6 className="subrayado-border">JAVA FULL-STACK <span style={{ color: '#34db74' }}> DEVELOPER</span></h6>
          <br />
          <a href="#container4" className="btn btn-secondary btn-lg mt-3">Projects</a>
        </div>
        <div className="col-sm-0 col-md-6 col-lg-6">
          {/* Add content for the second column if needed */}
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
