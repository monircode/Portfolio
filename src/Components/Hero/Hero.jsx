import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Monir from '../../assets/monir.jpg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={Monir} alt="" />
      <h1><span>I'm MoniR,</span> Frontend Developer based in Bangladesh.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, tenetur. Minima accusantium ad sed dolorum veniam dolorem blanditiis placeat dolore.</p>
      <div className="hero_action">
        <div className="hero_connect"><AnchorLink className='anchor_link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero_resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
