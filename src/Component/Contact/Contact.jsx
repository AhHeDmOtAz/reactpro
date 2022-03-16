import React, { Component } from 'react';
import style from './Contact.module.css';

export default class Contact extends Component {
    render() {
        return (
            <>
                <div className={style.test}>
                    <h2>Contacts</h2>
                    <div className='d-flex align-items-center justify-content-center flex-row' >
                        <div className={style.test1}></div>
                        <i className='fas fa-star fa-3x'></i>
                        <div className={style.test1}></div>
                    </div>

                </div>
                <div className="container py-4">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">

                            <form id="contactForm" name="sentMessage" novalidate="novalidate">
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">

                                        <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">

                                        <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">

                                        <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className={style.test2}>
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <textarea className="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div id="success"></div>
                                <div className="form-group"><button className="btn btn-info btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                            </form>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}
