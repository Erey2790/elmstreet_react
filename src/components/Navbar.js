import React, { Component } from 'react'
import Navitem from './Navitem'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }

    activeItem = (x) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemId': x}, () =>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav>
                <ul>
                    <Navitem item="Home" toLink='/' active={this.activeitem}></Navitem>
                    <Navitem item='About' toLink='/about' active={this.activeitem}></Navitem>
                    <Navitem item='Education' toLink='/education' active={this.activeitem}></Navitem>
                    <Navitem item='Skills' toLink='/skills' active={this.activeitem}></Navitem>
                    <Navitem item='Contact' toLink='/contact' active={this.activeitem}></Navitem>
                </ul>
            </nav>
        )
    }
}

export default Navbar