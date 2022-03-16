import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logooo from '../../assats/avataaars.svg';
import Portfilo from '../Portfilo/Portfilo';


import style from './HomeComponent.module.css';

export default class HomeComponent extends Component {
    render() {
        return (
            <>
                <div className={style.logo}>
                    
                    <nav className=" container-fluid navbar navbar-expand-lg navbar-light  ">
                        <div className="container-fluid py-3">
                            <a className="navbar-brand text-white" href="#">START REACT</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                Menu
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active text-white" aria-current="page" to='portfilo'>Portfalio</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to='about'>About</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link  text-white " to='contact'>ContActs</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                    
                </div>
                <div className={`container-fluid ${style.home}`}>
                    <div className='d-flex align-items-center justify-content-center flex-column vh-100 '>
                        <img src={logooo} className=' d-flex justify-content-center w-100' alt="" />
                        <h1>START REACT</h1>
                        <div className='d-flex align-items-center justify-content-center flex-row' >
                            <div className={style.test}></div>
                            <i className='fas fa-star fa-3x'></i>
                            <div className={style.test}></div>
                        </div>
                        <p >Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>



            </>)
    }
}
