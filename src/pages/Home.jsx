import React from 'react';
import '../pages/home.css';
import intro1 from '../images/intro1.png';
import { HashLink  as Link} from 'react-router-hash-link';
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className='home'>
        <div id='about'>
            <div className="container-lg">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 text-center mt-1 d-md-block">
                        <img className="img-fluid" src={intro1} alt="about"/>
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        <h1>
                            <div className="display-2">Leo Emmy</div>
                            <div className="display-5 text-muted">Frontend Web Developer</div>
                        </h1>
                        <p className="lead my-4 justify-content-start">I am a passionate frontend web developer,  After obtaining my HND in Quantity Surveying, I dedicated a year in learning web development, with little prior knowledge about web designs which makes the learning really fast, I have been able to work efficiently with Javascript and Bootstrap. I have an undying passion for programming and I see myself becoming a full stack web developer soon. I am currently working with Bootstrap 5 and Jquery to deliver projects.</p>

                        <Link smooth to ="#contact" className="btn btn-secondary">HIRE ME</Link>
                    </div>

                </div>
            </div>

        </div>


    </div>
  )
}

export default Home