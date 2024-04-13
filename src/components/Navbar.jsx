import React, { useState } from 'react'
import Logo from '../assets/The Logo.png'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTimes } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";


const Navbar = () => {
  const[open,setOpen] = useState(false)
  return (
    <>
    <span>This website is undergoing new developments. Thank you for visiting!</span>
    <nav>
      <div className="logo">
        <span><img src={Logo} alt="" /></span>
      </div>
      <div className="nav_list">
        <ul>
          <li><Link to={'/'}>home</Link></li>
          {/*<li><Link to={'/posts'}>blog</Link></li>*/}
          <li><Link to={'/about'}>about</Link></li>
          <li><Link to={'/contact'}>contact</Link></li>
        </ul>
      </div>
      <div className="mobile_menu">
            {!open &&<FaBarsStaggered className='menu_icon' onClick={()=>setOpen((prev) => !prev)}/>}
            {open &&<ul className='nav_mobile'>
              <FaTimes className='close' onClick={()=>setOpen((prev) => !prev)}/>
              <li><Link to={'/'} onClick={()=>setOpen((prev) => !prev)}>home</Link></li>
              {/*<li><Link to={'/posts'} onClick={()=>setOpen((prev) => !prev)}>blog</Link></li>*/}
              <li><Link to={'/about'} onClick={()=>setOpen((prev) => !prev)}>about</Link></li>
              <li><Link to={'/contact'} onClick={()=>setOpen((prev) => !prev)}>contact</Link></li>
              <div>
                <h5>Let's connect</h5>
                <div className="socialist">
                <Link><FaLinkedinIn className='social_media'/></Link>
                <Link><FaFacebookF className='social_media'/></Link>
                
                <Link><TbWorldWww className='social_media'/></Link>
                </div>
              </div>
            </ul>}
          </div>
    </nav>
    </>
  )
}

export default Navbar