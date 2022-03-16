import React, { Component } from 'react'
import About from '../About/About';
import Contact from '../Contact/Contact';
import HomeComponent from '../HomeComponent/HomeComponent';
import Location from '../Location/Location';
import Portfilo from '../Portfilo/Portfilo';
import { Route, Routes } from 'react-router-dom';





export default class App extends Component {
  render()
   {
    return (
      <>
        <HomeComponent/>
       <div>
       <Routes>
          <Route path='/' element={<HomeComponent/>
          }></Route>
          <Route path='portfilo' element={<Portfilo/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='contact'element={<Contact/>}></Route>
          
        </Routes>
       </div>
        <Location/>
        
      </>
    );
  }

}
