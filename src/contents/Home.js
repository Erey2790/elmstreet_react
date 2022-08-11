import React, { Component } from 'react';
import ReactTypingEffect from  'react-typing-effect';
// import profilePic from '../img/bobby.png';
import Social from '../components/Social';
import self from '../img/self.jpg';

class Home extends Component {
    render() {
        return (
            <div className='condiv home'>
                <img src={self} className='profilepic' alt='self pic'></img>
                <ReactTypingEffect className='typingeffect' text={['I am Elmer Reyes', ' I am a Full Stack Web Developer']}
                speed={100} eraseDelay={700}/>

                <Social />
            </div>

        )
    }
}

export default Home