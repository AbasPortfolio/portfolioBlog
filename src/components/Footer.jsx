import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/The Logo.png'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";


const Footer = () => {
  return (
    <footer>
      <div className="recomended">
        <h3>Popular Posts</h3>
        <Link>How to start a business</Link>
        <Link>Why small businesses need websites</Link>
        <Link>Where to start hosting your website</Link>
        <Link>How to generate income through your website</Link>
      </div>
      <div className="logo_sign">
        <img src={Logo} alt="" />
        <small>all copyrights are reserved &#169;</small>
      </div>
      <div className="socials">
        <h3>Let's connect</h3>
        <Link><FaLinkedinIn/></Link>
        <Link><FaMedium/></Link>
        <Link><FaFacebookF/></Link>
        <Link><FaDribbble/></Link>
        <Link><TbWorldWww/></Link>
      </div>
    </footer>
  )
}

export default Footer