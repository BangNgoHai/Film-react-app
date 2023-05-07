import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <>
      <nav className="navbar">
          <Link className="title" to="/">Film</Link>
          <Link to="/">Watch List</Link>
          <Link to="/watched">Watched</Link>
          <Link className="add" to="/add">+ADD</Link>
      </nav>
    </>
  )
}

export default Header
