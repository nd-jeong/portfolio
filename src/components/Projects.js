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
                <div>
                    <p className='project-description'>This is a simple Flappy Bird clone using HTML Canvas for the game board and collision detection. The score keeping, gravity, and insane mode were added using JavaScript.</p>
                </div>
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
                <div>
                    <p className='project-description'>I created this web app to keep track of teams and players in the NBA. Users can view small blurbs describing each team and player as well as additional info for players such as height, weight, and university attended.</p> 
                    <p className='project-description'>This app uses AJAX to request data from two APIs and uses React to render the components and data.</p>
                </div>
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
                    <p>Sequelize</p>
                </div>
                <div>
                    <p className='project-description'>This app was designed to keep track of a users spending habits. They can simply enter a transaction amount and select a transaction type which will automatically update their current and remaining balance. The user is also able to view percentages of their spending as well as sort through all of their transactions by type.</p> 
                    <p className='project-description'>The database for this full-stack app was built using Sequelize. Sequelize was also used to create all CRUD requests and the front end was created using React. The dashboard component re-renders everytime a transaction is added, so the total balance and remaining budget is always up to date.</p>
                </div>
            </div>
        </div>
    )
}

export default Projects;