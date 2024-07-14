import React from 'react'
import './Contact.css'
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "ffda043e-c646-42b8-9493-f84878088e64");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

    return (
        <div id='contact' className='contact'>
            <div className="contact_title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact_section">
                <div className="contact_left">
                    <h1>Let's Talk</h1>
                    <p>I am available to take on new projects, so feel free to conatct me</p>
                    <div className="contact_details">
                        <div className="contact_detail">
                            <span><MdEmail /></span> <p>monir@gmail.com</p>
                        </div>
                        <div className="contact_detail">
                            <span><FaPhoneSquareAlt />
                            </span> <p>01710531950</p>
                        </div>
                        <div className="contact_detail">
                            <span><FaLocationArrow />
                            </span> <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact_right'>
                    <label htmlFor="text">Your Name</label>
                    <input type="text" name="name" id="" placeholder='Enter Your Name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" name='email' placeholder='Your Email' />
                    <label htmlFor="text">Write Your Message</label>
                    <textarea name="message" rows="8" placeholder='Type Your Message Here'></textarea>
                    <button type='submit' className='contact_submit'>Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
