import React from 'react';
import './styles/aboutme.css';

function AboutMe() {
    return(
        <div className='about-me-container'>
            <div className='brand-statement-container'>
                <p className='brand-statement'>Having worked mostly with technology and accompanied by an unquenchable thirst for learning, software engineering is a natural fit. I revel in the opportunity to learn about and work with new technologies. As an ambivert, I am able to adapt to any situation and that, coupled with my penchant for tackling problems head on are essential for keeping focus on the task at hand. </p>
            </div>
            <div>
                <a href='https://drive.google.com/file/d/1YEQ-nnZyhR-Qgdh_cU3xP1blEdu3_M4m/view?usp=sharing' target='_blank' className='resume-link'>View my resume</a>
            </div>
        </div>
    )
}

export default AboutMe;