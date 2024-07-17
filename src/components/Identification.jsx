import React from 'react'
import mailPic from "../images/mail.png"
import linkedInPic from "../images/linkedin.png"

export default function Identification() {
  return (
    <div className="identification">
        <h1>Victor Mugisha</h1>
        <h3>Frontend Developer</h3>
        <p>victor-mugisha/website</p>
        <div className="buttons">
            <button className='email-button'>
                <img src={mailPic} />
                <span>Email</span>
            </button>
            <button className='linkedin-button'>
                <img src={linkedInPic} />
                <span>LinkedIn</span>
            </button>
        </div>
    </div>
  )
}
