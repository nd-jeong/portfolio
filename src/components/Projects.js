import React from 'react';
import './styles/projects.css';

function Projects() {
    return(
        <div className='project-container-wrapper'>
            <div className='project-container'>
                <h3>Flappy Bird Clone</h3>
                <a href='https://nd-jeong.github.io/Flappy-Bird-Clone/index.html' target='_blank'>
                    <div className='project-1-preview'></div>
                </a>
                <div className='project-skills-container'>
                    <p>HTML Canvas</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                </div>
                <p>Project 1 description</p>
            </div>
            <div className='project-container'>
                <h3>NBA React App</h3>
                <a href='http://ruthless-cloud.surge.sh/' target='_blank'>
                    <div className='project-2-preview'></div>
                </a>
                <div className='project-skills-container'>
                    <p>React</p>
                    <p>CSS</p>
                    <p>AJAX</p>
                    <p>JavaScript</p>
                </div>
                <p>Project 2 description</p>
            </div>
            <div className='project-container'>
                <h3>Digital Penny Pincher</h3>
                <a href='https://digital-penny-pincher.herokuapp.com/' target='_blank'>
                    <div className='project-3-preview'></div>
                </a>
                <div className='project-skills-container'>
                    <p>React</p>
                    <p>JavaScript</p>
                    <p>CSS</p>
                    <p>PSQL</p>
                </div>
                <p>Project 3 description</p>
            </div>
        </div>
    )
}

export default Projects;