import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faGitAlt, faBootstrap, faNode,  } from '@fortawesome/free-brands-svg-icons'
import { DiMysql, DiHeroku, DiMongodb, DiReact,  } from "react-icons/di";
import { SiApollographql } from 'react-icons/si'





class About extends Component {
    render() {
        return (
            <div className='condiv'  >
                <h1 className='subtopic'>About Me</h1>
                <h4>Hey there,</h4>
                <h1>I'm Elmer Reyes</h1>
                <h3>Full Stack Web <u>Developer</u> and these are some of my skills...</h3>
                <br></br>
                <ul className='skills-icons'>
                    <li>
                    <FontAwesomeIcon icon={ faHtml5 } size="4x" color='#e34c26'></FontAwesomeIcon>
                    <span className='text-icon'>HTML</span>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={ faCss3Alt } size="4x" color='#264de4'></FontAwesomeIcon>
                    <span className='text-icon'>CSS</span>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={ faJsSquare } size="4x" color='#f0db4f'></FontAwesomeIcon>
                    <span className='text-icon'>JAVASCRIPT</span>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={ faGitAlt }size="4x" color='#f34f29'></FontAwesomeIcon>
                    <span className='text-icon'>GIT</span>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={ faBootstrap }size="4x" color='#563d7c'></FontAwesomeIcon>
                    <span className='text-icon'>BOOTSTRAP</span>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={ faNode }size="4x" color='#3C873A'></FontAwesomeIcon>
                    <span className='text-icon'>NODE.JS</span>
                    </li>
                    <li>
                    <DiMysql size='3.5em' color='#00758F' />
                    <span className='text-icon'>MySQL</span>
                    </li>
                    <li>
                    <DiHeroku size='4em' color='#6762A6' />
                    <span className='text-icon'>HEROKU</span>
                    </li>
                    <li>
                    <DiMongodb size='3.5em' color='#4DB33D'/>
                    <span className='text-icon'>MONGODB</span>
                    </li>
                    <li>
                    <SiApollographql size='3.5em' color='#e535ab'/>
                    <span className='text-icon'>APOLLO GRAPHQL</span>
                    </li>
                    <li>
                    < DiReact size='4em' color='#61DBFB'/>
                    <span className='text-icon'>React</span>
                    </li>
                    
                </ul>
                

            </div>
        )
    }
}

export default About