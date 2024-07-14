import React, { useRef, useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import { PiDotsThreeOutlineThin } from "react-icons/pi";
import { RiMenu3Fill } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuref = useRef();

  const openMenu = () => {
    menuref.current.style.right = "0";
  }
  const closeMenu = () => {
    menuref.current.style.right = "-400px";
  }

  return (
    <div className='navbar'>
      <h1>MoniR</h1>
      <button className='nav_open' onClick={openMenu}><RiMenu3Fill /></button>
      <ul ref={menuref} className="nav-menu">
        <button className='nav_close' onClick={closeMenu}><VscChromeClose /></button>
        <li><AnchorLink className='anchor_link active' offset={50} href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor_link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About</p></AnchorLink></li>
        <li><AnchorLink className='anchor_link' offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink></li>
        <li><AnchorLink className='anchor_link' offset={50} href='#work'><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink></li>
        <li><AnchorLink className='anchor_link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact"}</li>
      </ul>

      <div className="nav-connect"><AnchorLink className='anchor_link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar