import React, { Component } from 'react';

import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className='condiv'>
                
                <h1 className='subtopic'>My Education</h1>
                <a className='subtopic' href='https://www.credly.com/badges/18bb637f-eb31-4154-99f6-8a022696ea84/public_url'>
                <Widecard title="Southern Methodist University" where='Continuing & Professional Education' from='Full Stack Web Development ' to='Coding Boot Camp Certificate (click here)' /></a>
                
            </div>
        )
    }
}

export default Education