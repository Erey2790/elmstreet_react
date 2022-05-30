import React, { Component } from 'react';








class ProjectCards extends Component {
    render() {
        return(
            <div className='projectos'>
                
                    <div className='container'>
                    <img src='img_avatar.png' alt='project 1'/>
                        <h4><b>Project 1</b></h4>
                        <p>Architect & Engineer</p>
                    </div>

                    
                    <div className='container'>
                    <img src='img_avatar.png'  alt='project 2'/>
                        <h4><b>Project 2</b></h4>
                        <p>Architect & Engineer</p>
                    </div>

                    
                    <div className='container'>
                    <img src='img_avatar.png' alt='project 3'/>
                        <h4><b>Project 3</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
            </div>
        )
    }
}

export default ProjectCards