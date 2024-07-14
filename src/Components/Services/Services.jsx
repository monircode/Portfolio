import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data'
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
    return (
        <div id='services' className='services'>
            <div className="services_title">
                <h1>Services</h1>
            </div>
            <div className="services_container">
                {Services_Data.map((service, index) => {
                    return <div key={index} className="services_format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services_readmore">
                            <p>Read More</p>
                            <span><FaArrowRight /></span>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Services

