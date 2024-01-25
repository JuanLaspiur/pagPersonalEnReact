import React from 'react';
import './conteiner2.css';
import img from '../img/1699658360706-removebg-preview.webp'

function Conteiner2() {
  return (
    <div className="container-fluid container2 py-5" data-aos="fade-in" data-aos-duration="1000" id="container2">
      <div className="row invertir">
        <div className="col-md-6">
          <img
            src={img}
            style={{
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            }}
            data-aos="fade-right"
            data-aos-duration="2000"
            className="mt-5"
            alt=""
          />
        </div>
        <div className="col-md-6 mt-2 text-center p-2">
          <h1>About me</h1>
          <h6>WEB DESIGNER | GRAPHIC DESIGNER</h6>
          <p>
            Hello! I'm a backend-focused full-stack developer with expertise in Java, Spring, Hibernate, and Oracle. I
            also have experience in React on the frontend. I've developed RESTful and asynchronous APIs using AJAX.
            Currently, I'm self-studying concurrency. I'm passionate about what I do, and every day, I strive to enhance
            my skills.
          </p>

          <div className="progress">
            <div className="pro-value1">
              <p>HTML/CSS <span className="text-white float-rigth"> 70%</span></p>
            </div>
          </div>
          <div class="progress">
            <div class="pro-value2">
              <p>JavaScript <span class="text-white float-rigth"> 70%</span></p>
            </div>
          </div>

          <div class="progress">
            <div class="pro-value3">
              <p>React <span class="text-white float-rigth"> 60%</span></p>
            </div>
          </div>

          <div class="progress">
            <div class="pro-value4">
              <p>Java <span class="text-white float-rigth"> 85%</span></p>
            </div>
          </div>
          <div class="progress">
            <div class="pro-value5">
              <p>Spring <span class="text-white float-rigth"> 75%</span></p>
            </div>
          </div>

          <button type="button" className="btn btn-secondary mt-3" onClick={descargarPDF}>
            Download CV
          </button>

          <a
            className="btn btn-primary mt-3"
            href="#container5"
            style={{ backgroundColor: '#34db74', borderColor: '#34db74', marginLeft:'5px' }}
          >
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Conteiner2;

// Asegúrate de tener la función descargarPDF definida
function descargarPDF() {
  // Lógica para descargar el PDF
}

