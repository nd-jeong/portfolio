import React, {Component} from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Typing, { Cursor } from 'react-typing-animation';
import './App.css';
import logo from './images/logo.png';

class App extends Component {
    constructor() {
        super();

        this.state = {
            aboutMe: false,
            projects: false,
            contact: false
        }
        this.selectAbout = this.selectAbout.bind(this);
        this.selectContact = this.selectContact.bind(this);
        this.selectProjects = this.selectProjects.bind(this);
        this.selectHome = this.selectHome.bind(this);
    }

    selectHome() {
        this.setState({
            aboutMe: false,
            projects: false,
            contact: false
        });
    }

    selectAbout() {
        this.setState({
            aboutMe: true,
            projects: false,
            contact: false
        });
    }

    selectProjects() {
        this.setState({
            aboutMe: false,
            projects: true,
            contact: false
        });
    }

    selectContact() {
        this.setState({
            aboutMe: false,
            projects: false,
            contact: true
        });
    }

    render() {
        return(
            <Router>
                <div className='app'>
                    <header className='header-container'>
                        <div className='logo-container' onClick={this.selectHome}>
                            <Link to='/'>
                                <img src={logo} className='logo'/>
                            </Link>
                        </div>
                        <nav>
                            <ul className='nav-link-container'>
                                <li onClick={this.selectAbout}>
                                    <Link to='/aboutme' className={this.state.aboutMe ? 'nav-link-selected' : 'nav-link'}>About Me</Link>
                                </li>
                                <li onClick={this.selectProjects}>
                                    <Link to='/projects' className={this.state.projects ? 'nav-link-selected' : 'nav-link'}>Projects</Link>
                                </li>
                                <li onClick={this.selectContact}>
                                    <Link to='/contact' className={this.state.contact ? 'nav-link-selected' : 'nav-link'}>Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <div>
                        {!this.state.aboutMe && !this.state.contact && !this.state.projects && 
                        <Typing className='intro-text' speed={75} cursorClassName='intro-cursor'>
                            <p>Hi, my name is Andy Jeong and I am a</p>
                            <p>&nbsp;Front-End</p>
                            <Typing.Backspace count={10}/>
                            <p>&nbsp;Back-End</p>
                            <Typing.Backspace count={9}/>
                            <p>&nbsp;Full-Stack Developer.</p>
                        </Typing>}
                    </div>
                </div>
                <Switch>
                    <Route exact path='/aboutme' component={AboutMe}/>
                    <Route exact path='/projects' component={Projects}/>
                    <Route exact path='/contact' component={Contact}/>
                </Switch>
            </Router>
        )
    }
}

export default App;
