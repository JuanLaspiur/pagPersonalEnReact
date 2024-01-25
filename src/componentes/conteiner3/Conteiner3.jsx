import React from 'react'
import './conteiner3.css'

function Conteiner3() {
  return (
    <div class="container container3 bg-ligth py-5 " data-aos="fade-in" data-aos-duration="1000" id="container3">

    <h1 class="text-center pb-5">Services </h1>
   
    <div class="row pb-3">
      <div class=" col-lg-4 mb-3">
        <div class="card text-center py-3" data-aos="fade-right" data-aos-duration="2000">
          <div class="card-body">
            <div class="circle text-center">
              <span><i class="bi bi-window-plus"></i></span>

            </div>
            <h4> Web Desing</h4>
            <p>Crafting visually striking and user-friendly web experiences. We blend colors, arrange elements, and prioritize usability to deliver captivating websites.</p>

          </div>
        </div>
      </div>
      <div class=" col-lg-4 mb-3">
        <div class="card text-center py-3" data-aos="flip-up" data-aos-duration="2000">
          <div class="card-body">
            <div class="circle text-center">
              <span><i class="bi bi-phone-flip"></i></span>

            </div>
            <h4> Responsible Desing</h4>
            <p>Mindful design with an eye on environmental and social impact. We create visually pleasing, eco-friendly, and ethical solutions.</p>
          </div>
        </div>



      </div>
      <div class=" col-lg-4 mb-3">
        <div class="card text-center py-3" data-aos="fade-left" data-aos-duration="2000">
          <div class="card-body">
            <div class="circle text-center">
              <span><i class="bi bi-code-slash"></i></span>

            </div>
            <h4> Development</h4>
            <p>Efficient coding for robust, scalable solutions. Our devs use cutting-edge tech to ensure optimal performance and seamless user experiences.</p>
          </div>
        </div>



      </div>

    </div>

   



  </div>
  )
}

export default Conteiner3
