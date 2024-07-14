import React from 'react'
import './About.css'
import Monir from '../../assets/monir.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about_titte">
            <h1>About Me</h1>
        </div>
        <div className="about_section">
            <div className="about_left">
                <img src={Monir} alt="" />
            </div>
            <div className="about_right">
                <div className="about_me">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, molestias, dolore pariatur minima totam voluptatem consequatur deserunt quod suscipit nobis vero voluptates quibusdam ipsum voluptatum illo perferendis eaque illum aspernatur.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni accusamus cumque iste molestias consequuntur repudiandae necessitatibus unde quidem maxime.</p>
                </div>
                <div className="about_skills">
                    <div className="about_skill"><p>HTML</p><hr style={{width:"90%"}}/></div>
                    <div className="about_skill"><p>CSS</p><hr style={{width:"60%"}}/></div>
                    <div className="about_skill"><p>JavaScript</p><hr style={{width:"55%"}}/></div>
                    <div className="about_skill"><p>ReactJs</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about_achivements">
            <div className="about_achivement">
                <h1>20+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about_achivement">
                <h1>15+</h1>
                <p>PROJESTS COMPLETED</p>
            </div>
            <hr />
            <div className="about_achivement">
                <h1>5+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About
