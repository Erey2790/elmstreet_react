import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

class Social extends Component {
    render() {
        return (
            <div className='social'>
                <a href="https://github.com/Erey2790">
              <FontAwesomeIcon icon={faGithub} size="4x" color='#24292f'></FontAwesomeIcon></a>
              <a href="https://github.com/Erey2790">
              <FontAwesomeIcon icon={faTwitter} size="4x" color='#0099CC'></FontAwesomeIcon></a>
            </div>
        )
    }
}

export default Social