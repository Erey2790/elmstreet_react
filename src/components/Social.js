import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

class Social extends Component {
    render() {
        return (
            <div className='social'>
                <a href="https://github.com/Erey2790">
              <FontAwesomeIcon icon={faGithub} size="4x" color='#24292f' className='github'></FontAwesomeIcon></a>
              <a href="https://twitter.com/eRey27">
              <FontAwesomeIcon icon={faTwitter} size="4x" color='#0099CC' className='twitter'></FontAwesomeIcon></a>
              <a href="https://www.linkedin.com/in/elmer-reyes-56091221b/">
              <FontAwesomeIcon icon={faLinkedin} size="4x" color='#0072b1' className='linkedIn'></FontAwesomeIcon></a>
            </div>
        )
    }
}

export default Social