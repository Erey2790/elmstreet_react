import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
// import Education from './contents/Education';
// import Skills from './contents/Skills';
// import Contact from './contents/Contact';
function App() {
 return (
        <Router>
            <div className='App'>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>
                {/* <Route path="/education">
   <Education />
   </Route>
   <Route path="/skills">
   <Skills />
   </Route>
   <Route path="/contact">
   <Contact />
   </Route> */}
            </div>
        </Router>
    );
 }
 export default App;
