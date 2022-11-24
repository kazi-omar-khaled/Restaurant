import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setTogglemenu] = useState(false);

  return (<nav className='app_navbar'>
    <div className='app_navbar_logo'>
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className='app_navbar_links'>
      <li className='p_opensans'><a href='#home'>Home</a></li>
      <li className='p_opensans'><a href='#about'>About</a></li>
      <li className='p_opensans'><a href='#menu'>Menu</a></li>
      <li className='p_opensans'><a href='#awards'>Awards</a></li>
    </ul>
    <div className='app_navbar_login'>
      <a href='#login' className='p_opensans'> Log In /Register </a>
      <a href='/' className='p_opensans'>Book Table</a>
    </div>
    <div className='app_navbar_smallscreen'>
      <GiHamburgerMenu color='fff' fontSize={27} onClick={() => setTogglemenu(true)} />

      {toggleMenu && (
        <div className='app_navbar_smallscreen_overlay flex_center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className='overlay_close' onClick={() => setTogglemenu(false)} />
          <ul className='app_navbar_smallscreen_links'>
            <li className='p_opensans'><a href='#home'>Home</a></li>
            <li className='p_opensans'><a href='#about'>About</a></li>
            <li className='p_opensans'><a href='#menu'>Menu</a></li>
            <li className='p_opensans'><a href='#awards'>Awards</a></li>
          </ul>
        </div>

      )}



    </div>
  </nav >
  )
};

export default Navbar;
