import React, { Component } from 'react';
import style from './Location.module.css';

export default class Location extends Component {
    render() {
        return (
            <>
                <div className={style.location}>
                    <div className="container py-4">
                        <div className="row">
                            <div className="col-lg-4">
                                <h4>LOCATION</h4>
                                <p>2215 John Daniel Drive
Clark, MO 65243</p>
                            </div>
                            <div className="col-lg-4">
                                <h4>AROUND THE WEB</h4>
                                <div className={style.icoo}>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-linkedin-in"></i>
                                <i class="fab fa-github"></i>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <h4>ABOUT FREELANCER</h4>
                                <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                            
                            </div>
                        </div>
                    </div>

                </div>
                <div className="bg-dark text-white text-center py-4">
                    <p>Copyright © Your Website 2021</p>
                </div>

            </>
        );
    }
}
