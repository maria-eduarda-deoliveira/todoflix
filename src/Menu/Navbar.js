import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Caret from '../assets/caret.svg';
import Profile from '../assets/profile.svg';


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          TODOFLIX
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'bi bi-x' : 'bi bi-list'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Início
            </Link>
          </li>

          <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}>
              Categorias <img className="setinha" src={Caret} />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <button className="Add">Adicionar Filme</button>

        <img className="perfil" src={Profile} />
        <img className="setaperfil" src={Caret} />
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
