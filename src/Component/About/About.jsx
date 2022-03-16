import React, { Component } from 'react';
import style from './About.module.css';

export default class About extends Component {
  render() {
    return (
      <>
        
          <div className={` my-4 ${style.test}`}>
            <h2>ABOUT</h2>
            <div className='d-flex align-items-center justify-content-center flex-row' >
              <div className={style.test1}></div>
              <i className='fas fa-star fa-3x'></i>
              <div className={style.test1}></div>
            </div>
            <div className=' d-flex align-items-center justify-content-center py-4  '>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>
          </div>
      </>
    );
  }
}
