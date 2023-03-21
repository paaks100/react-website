import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/pizzaLogo.png';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

export const Navbar = () => {
    const [openLinks, setOpenLinks] = useState(false);

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? 'open' : 'close'}>
            <img src={Logo}/>
            <div className='hiddenLinks'>
                <Link to='/'> Home </Link>
                <Link to='/menu'> Menu </Link>
                <Link to='/about'> About </Link>
                <Link to='/contact'> Contact </Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to='/'> Home </Link>
            <Link to='/menu'> Menu </Link>
            <Link to='/about'> About </Link>
            <Link to='/contact'> Contact </Link>
            <button>
                <ReorderIcon/>
            </button>
        </div>
    </div>
  )
}