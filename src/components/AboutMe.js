import React from 'react';
import './styles/aboutme.css';
import ProfilePicture from '../images/profile.jpg';

function AboutMe() {
    return(
        <div className='about-me-container'>
            <div className='profile-picture-container'>
                <img src={ProfilePicture} className='profile-picture'></img>
            </div>
            <div className='brand-statement-container'>
                <p className='brand-statement'>Having worked mostly with technology and accompanied by an unquenchable thirst for learning, software engineering is a natural fit. I revel in the opportunity to learn about and work with new technologies. As an ambivert, I am able to adapt to any situation and that, coupled with my penchant for tackling problems head on are essential for keeping focus on the task at hand. </p>
            </div>
            <div>
                <a href='https://drive.google.com/file/d/17BCRvSElKPHDhD7r4yv4SYbJdac093Wh/view' target='_blank' className='resume-link'>View my resume</a>
            </div>
        </div>
    )
}

export default AboutMe;