import React from 'react';
import './styles/contact.css';
import gitHub from '../images/github.svg';
import linkedIn from '../images/linkedin.svg';

function Contact() {
    return(
        <div>
            <div className='social-media-container'>
                <h4>Please feel free to follow me:</h4>
                <div className='social-media-wrapper'>
                    <a className='social-media-link' href='https://github.com/nd-jeong' target='_blank'>
                        <img src={gitHub} className='social-media-icon' style={{height: 50}}></img>
                    </a>
                    <a className='social-media-link' href='https://www.linkedin.com/in/andy-jeong/' target='_blank'>
                        <img src={linkedIn} className='social-media-icon' style={{height: 50}}></img>
                    </a>
                </div>
            </div>
            <div className='email-container'>
                <h4>Have any questions or comments? Feel free to send me a message at:</h4>
                <h3>ndj.jeong@gmail.com</h3>
            </div>
            <div className='icon-copyright'>
                Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0</a>
            </div>
        </div>
    )
}

export default Contact;