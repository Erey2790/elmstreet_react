import React, { Component } from 'react'
import Navitem from './Navitem'

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <Navitem item="Home" toLink='/'></Navitem>
                    <Navitem item='About' toLink='/about'></Navitem>
                    <Navitem item='Education' toLink='/education'></Navitem>
                    <Navitem item='Skills' toLink='/skills'></Navitem>
                    <Navitem item='Contact' toLink='/contact'></Navitem>
                </ul>
            </nav>
        )
    }
}

export default Navbar