import React from 'react';
import intro from '../images/intro.png';
import './services.css';


const Services = () => {
  return (
    <div className='services' id='services'>

<div class="container-md">
    <div class="text-center">
      <h2>I can design a simple website for you</h2>
      <p class="lead text-muted"> a quick glance at what I can do for you.</p> </div>
 

  <div class="row my-5 g-5 justify-content-around align-items-center">
    <div class="col-6 col-lg-4">
      <img class="img-fluid" src={intro} alt=""/>
    </div>

    <div class="col-lg-6">

    
<div class="accordion" id="chapters">
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading-1">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-1" aria-expanded="true" aria-controls="chapter-1">A portfolio website </button>  
    </h2>
    <div id="chapter-1" class="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#chapters">
      <div class="accordion-body" >
      <p>  Do you need a portfolio website to tell people about yourself, i can help you build a dynamic website to showcase what you can do to the world</p>
      </div>

    </div>
  </div>
  

  <div class="accordion-item">
    <h2 class="accordion-header" id="heading-2">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-2" aria-expanded="false" aria-controls="chapter-2">Blog website </button>  
    </h2>
    <div id="chapter-2" class="accordion-collapse collapse " aria-labelledby="heading1" data-bs-parent="#chapters">
      <div class="accordion-body" >
      <p>  Do you need a website where you can give information to the world or display contents that will be beneficial to people? I can design one for you and help keep it updated at a very low cost.</p>
      </div>

    </div>

    
  </div>
  

  <div class="accordion-item">
    <h2 class="accordion-header" id="heading-3">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-3" aria-expanded="false" aria-controls="chapter-1">Business website </button>  
    </h2>
    <div id="chapter-3" class="accordion-collapse collapse " aria-labelledby="heading1" data-bs-parent="#chapters">
      <div class="accordion-body" >
      <p>  A business website serves as a space to provide general information about what you, showing a clear description of who you are, what you offer  and how to contact you, you can get in touch with me and the job will be done as soon as you want</p>
      </div>

    </div>

    
  </div>
  

  <div class="accordion-item">
    <h2 class="accordion-header" id="heading-4">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-4" aria-expanded="false" aria-controls="chapter-1"> Simple E-comerce website </button>  
    </h2>
    <div id="chapter-4" class="accordion-collapse collapse " aria-labelledby="heading1" data-bs-parent="#chapters">
      <div class="accordion-body" >
      <p>  I can design a simple E-commerce website where your potentials customers can easily make their order while you deliver to them.</p>
      </div>

    </div>

    
  </div>
  
</div>

</div>
  </div>
</div>



    </div>
  )
}

export default Services