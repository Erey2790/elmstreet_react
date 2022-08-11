import React, { Component } from 'react';
import budgetTracker from '../img/budgetTracker.PNG';
import drinkmoto from '../img/drinkmoto.PNG';
// import shopshop from '../img/shopshop.PNG';
import ohsnapsnip from '../img/ohsnapsnip.PNG'










class ProjectCards extends Component {
    render() {
        return(
            <div className='projectos'>
                
                    <div className='container'>
                    <img src={ohsnapsnip} alt='project 1' className='projectPic'/>
                        <h4><a href='https://serene-savannah-87784.herokuapp.com/' className='projectLinks'><b>Oh Snap!</b></a></h4>
                        <p>This project is a single-page application built with React</p>
                    </div>

                    
                    <div className='container'>
                    <img src={budgetTracker}  alt='project 2' className='projectPic'/>
                        <h4><a href='https://powerful-mountain-26236.herokuapp.com/' className='projectLinks'><b>Budget Tracker</b></a></h4>
                        <p>This application utilizes Service Workers, Web Manifest, IndexedDB, and is deployed with Heroku.</p>
                    </div>

                    
                    <div className='container'>
                    <img src={drinkmoto} alt='project 3' className='projectPic'/>
                        <h4><a href='https://father-of-cats.github.io/the-cocktail-roulette/' className='projectLinks'><b>Cocktail Roulette</b></a></h4>
                        <p>A web application that uses JAVASCRIPT and a third party API to generate a random drink.</p>
                    </div>
            </div>
        )
    }
}

export default ProjectCards