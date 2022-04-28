import React from 'react';
import { Link, Routes } from 'react-router-dom';
import '../button/button.css';

const Button = () => {
  return (
    <>
  
      <Link className='hire-me' to='/hire-me'>
        <button className='btn1'>Hire me</button>
      </Link>
      
    </>


        )
}

        export default Button;