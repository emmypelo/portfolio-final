import logo from '../../images/logo.png';
import '../navbar/navbar.css';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as 
Link } from 'react-router-hash-link';
// import Button from '../button/Button';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className='navbar1'>
            <Link to="/"> <img src={logo} alt="" className='nav-logo1 img-fluid' /></Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-items">
                    <Link  to='#' className='nav-links' onClick={closeMobileMenu}>HOME</Link>
                </li>
                <li className="nav-items">
                    <Link to='/#about' className='nav-links' onClick={closeMobileMenu}>ABOUT</Link>
                </li>
                <li className="nav-items">
                    <Link to='/#services'
                        className='nav-links'
                        onClick={closeMobileMenu}>
                        SERVICES
                    </Link>
                </li>
               
                <li className="nav-items">
                    <Link to='#contact' className='nav-links' onClick={closeMobileMenu}>CONTACT</Link>
                </li>
                <li className="nav-items">
                    {/* <Link to='#contact' className='nav-links-mobile' onClick={closeMobileMenu}>HIRE ME</Link> */}
                </li>
            </ul>
        </div>
    );
}

export default Navbar;