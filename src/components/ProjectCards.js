import React, { Component } from 'react';
import budgetTracker from '../img/budgetTracker.PNG';
import drinkmoto from '../img/drinkmoto.PNG';
import shopshop from '../img/shopshop.PNG';








class ProjectCards extends Component {
    render() {
        return(
            <div className='projectos'>
                
                    <div className='container'>
                    <img src={shopshop} alt='project 1' className='projectPic'/>
                        <h4><b>Shop Shop</b></h4>
                        <p>This project uses MongoDB and Imsonmia to showcase the fundamentals of the CRUD routes.</p>
                    </div>

                    
                    <div className='container'>
                    <img src={budgetTracker}  alt='project 2' className='projectPic'/>
                        <h4><b>Budget Tracker</b></h4>
                        <p>This application utilizes Service Workers, Web Manifest, IndexedDB, and is deployed with Heroku.</p>
                    </div>

                    
                    <div className='container'>
                    <img src={drinkmoto} alt='project 3' className='projectPic'/>
                        <h4><b>Cocktail Roulette</b></h4>
                        <p>A web application that uses JAVASCRIPT and a third party API to generate a random drink.</p>
                    </div>
            </div>
        )
    }
}

export default ProjectCards