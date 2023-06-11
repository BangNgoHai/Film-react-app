import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen,setMenuOpen] = useState(false);
  const toggelMenu = () => {
    setMenuOpen(!isMenuOpen);
  }
  const closeMenu = () => {
    setMenuOpen(false);
  }
  return (
    <>
      <nav className="navbar">
          <Link className="title" to="/add">Film</Link>
          <ul className={isMenuOpen ? 'show' : ''}>
            <Link className="li" to="/" onClick={closeMenu}>Watch List</Link>
            <Link className="li" to="/watched" onClick={closeMenu}>Watched</Link>
            <Link className="li" id="add" to="/add" onClick={closeMenu}>+ADD</Link>
          </ul>
          <label>
            <MenuIcon id="icon" onClick={toggelMenu}/>
          </label> 
      </nav>
    </>
  )
}

export default Header
