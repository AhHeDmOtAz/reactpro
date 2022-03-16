import React, { Component } from 'react';
import style from './Portfilo.module.css';
import image from '../Portfilo/image/cabin.png';
import image1 from '../Portfilo/image/cake.png';
import image2 from '../Portfilo/image/circus.png';
import image3 from '../Portfilo/image/game.png';
import image4 from '../Portfilo/image/safe.png';
import image5 from '../Portfilo/image/submarine.png';



export default class Portfilo extends Component {
    render() {
        return (
            <>
                <div className={style.test}>
                    <h1>PORTFOLIO</h1>
                    <div className='d-flex align-items-center justify-content-center flex-row' >
                        <div className={style.test1}></div>
                        <i className='fas fa-star fa-3x'></i>
                        <div className={style.test1}></div>
                    </div>
                    <div className={style.test2}>
                        <div className="container my-5">
                            <div className="row">

                                <div className="col-lg-4 mb-5 ">
                                    <div className='position-relative'>
                                        <div className={` d-flex align-items-center justify-content-center w-100 ${style.test3}`}><i className="fas fa-plus fa-7x text-white "></i></div>

                                        <img src={image} className=" w-100 img-fluid   " alt="" />
                                    </div>

                                </div>


                                <div className="col-lg-4 mb-5  ">

                                <div className='position-relative'>
                                        <div className={` d-flex align-items-center justify-content-center w-100 ${style.test3}`}><i className="fas fa-plus fa-7x text-white "></i></div>

                                        <img src={image1} className=" w-100 img-fluid   " alt="" />
                                    </div>


                                </div>


                                <div className="col-lg-4 mb-5">

                                <div className='position-relative'>
                                        <div className={` d-flex align-items-center justify-content-center w-100 ${style.test3}`}><i className="fas fa-plus fa-7x text-white "></i></div>

                                        <img src={image2} className=" w-100 img-fluid   " alt="" />
                                    </div>


                                </div>


                                <div className="col-lg-4 mb-5">

                                <div className='position-relative'>
                                        <div className={` d-flex align-items-center justify-content-center w-100 ${style.test3}`}><i className="fas fa-plus fa-7x text-white "></i></div>

                                        <img src={image3} className=" w-100 img-fluid   " alt="" />
                                    </div>

                                </div>


                                <div className="col-lg-4 mb-5">

                                <div className='position-relative'>
                                        <div className={` d-flex align-items-center justify-content-center w-100 ${style.test3}`}><i className="fas fa-plus fa-7x text-white "></i></div>

                                        <img src={image4} className=" w-100 img-fluid   " alt="" />
                                    </div>


                                </div>


                                <div className="col-lg-4 mb-5">

                                <div className='position-relative'>
                                        <div className={` d-flex align-items-center justify-content-center w-100 ${style.test3}`}><i className="fas fa-plus fa-7x text-white "></i></div>

                                        <img src={image5} className=" w-100 img-fluid   " alt="" />
                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>
                </div>


            </>
        );
    }
}
