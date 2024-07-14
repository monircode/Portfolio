import React from 'react'
import './MyProject.css'
import My_Project from '../../assets/myproject_data'
import { FaArrowRight } from "react-icons/fa";

const MyProject = () => {
  return (
    <div id='work' className='myproject'>
      <div className="myproject_title">
        <h1>My Latest Work</h1>
      </div>
      <div className="myproject_container">
        {My_Project.map((project, index)=>{
          return <img key={index} src={project.p_img} alt="" />
        })}
      </div>
      <div className="myproject_showmore">
        <p>Show More</p>
        <span><FaArrowRight/></span>
      </div>
    </div>
  )
}

export default MyProject

