import React, { Component } from 'react';

import ProjectCards from '../components/ProjectCards';




class Projects extends Component {
    render() {
        return (
            <div className='condiv home'>
                <h1 className='subtopic'>My Projects</h1>
                <h3 className='subtopic'>My recent projects...</h3>
                <div>
                <ProjectCards /></div>
            </div>
        )
    }
}

export default Projects