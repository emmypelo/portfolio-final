import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Menuitems} from '../menuitems/Menuitems';
import '../dropdown/dropdown.css'

const Dropdown = () => {

  const [click, setClick] = useState(false);
  const handleClick = ()=> setClick(!false);
  return (
    <>
    <ul onClick={handleClick}
    className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
      {Menuitems.map((item, index)=>{
        return(
          <li key={index}>
            <Link className={item.cName}
            to={item.path}
            onClick={(setClick(false))}>
              {item.title}
            </Link>
          </li>
        )
      })}

    </ul>
    
    
    </>
   
  )
}

export default Dropdown;