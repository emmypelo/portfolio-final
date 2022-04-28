import { useRef, useState } from 'react';
// import { useNavigate} from 'react-router-dom';
import './contact.css';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState("");
  const [error, setError] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_24251im',
      'template_bz9zxmp', formRef.current,
      'cPffaiE6UITaalVHJ')
      .then((result) => {

        console.log(result.text);
        setDone(true)

        setTimeout(() => {
          e.target.reset()
          (setDone(false)) 
        }, 1000);
      
        window.location.href='/#about'
      }, (error) => {
        console.log(error.text);
        setError(true)
      });

  }



  return (
    <div className='c' id='contact'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Discuss your project with me</h1>

        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>
              Get in touch with me for your project or any other enquiries.</b>
          </p>



          <div class="container-md">
            <div class="row justify-content-around">
              <div class="col-md-5">
                <form ref={formRef} onSubmit={handleSubmit}>
                  <label for="name" class="form-label" id="name">Name:</label>
                  <div class="input-group mb-4">
                    <span class="input-group-text">
                      <i class="bi bi-person-fill"></i>
                    </span>
                    <input type="text" class="form-control" id="name" name='user_name' placeholder="e.g Leo" required maxLength="15" minLength="5
            "/>
                  </div>

                  <label for="email" class="form-label" id="name">email:</label>
                  <div class="input-group mb-4">
                    <span class="input-group-text">
                      <i class="bi bi-envelope-fill"></i>
                    </span>
                    <input type="email" class="form-control" name='user_email' id="email" placeholder="e.g leo2dworld@gmail.com" />
                  </div>

                  <label for="subject" class="form-label" id="subject">subject:</label>
                  <div class="input-group mb-4">
                    <span class="input-group-text">
                      <i class="bi bi-envelope-fill"></i>
                    </span>
                    <input type="text" class="form-control" name='user_subject' id="subject" placeholder="I need a portfolio website" />
                  </div>



                  <div class="form-floating mb-4 mt-5">

                    <textarea id="query" class="form-control" name='message' required minLength="5
            "></textarea>
                    <label for="query">your query</label>

                  </div>

                  <div class="mb-4 text-center">
                    <button type="submit"
                      class="btn btn-secondary">Submit</button>
                   {done && <h3>Thanks, your message has been recieved'</h3>}
                     
                    
                  </div>
                </form>
              </div>
              <div class="col-md-5 text-center justify-content-around">
                <p class="h3"> Contact Details </p>
                <p class="h5">Ogunleye Emmanuel</p>
                <p class="h5">Omo Oba villa, Omisanjana, Ado-Ekiti</p>

                <div className="cont-det">


                </div>
                <p class="info">
                  <i class="far fa-envelope icons"></i>
                  <h5> addjbleo@gmail.com</h5>
                </p> 
                <p class="info">
                  <i class="fa fa-phone-alt icons"></i>
                  <h5>+2349060848004</h5>
                </p>
                <h5 class="info">
                  <i class="fab fa-facebook-f icons"></i>

                  <h5>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href="https://facebook.com/emmaenuel.pelumi" class="text-decoration-none">Leo Emmy</a>
                  </h5>
                  </h5>

                <p class="info">
                  <i class="fab fa-twitter icons"></i>

                  <h5>
                  <a target='_blank'
                    rel='noreferrer' href="https://twitter.com/king_leo4u" class="text-decoration-none">Leo Emmy</a>

                  </h5>
                  </p>
                <h5 class="info">
                  <i class="fab fa-linkedin icons"></i>
                  <h5>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://linkedin.com/in/codingqsleo"
                    class="text-decoration-none">Emmanuel Ogunleye
                  </a>

                  </h5>
                
                </h5>

                


              </div>


            </div>

          </div>



        </div>
      </div>

    </div>

  )
}

export default Contact