import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

class Social extends Component {
    render() {
        return (
            <div className='social'>
              <FontAwesomeIcon icon={faGithub} size="4x"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faTwitter} size="4x"></FontAwesomeIcon>
            </div>
        )
    }
}

export default Social