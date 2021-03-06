import React from 'react';
import './Footer.css'
import call from '../../../images/call-back.svg'
import message from '../../../images/message.svg'
import chat from '../../../images/chat.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,  faInstagram,  faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
            <div className="container footer mb-5 mt-5 pt-5">
                <div className="row mt-5">
                    <div className="col-md-3 col-sm-1 text-center">
                        <h6>Travel XP</h6>
                        <br />
                        <div className="d-flex justify-content-around align-items-center">
                            <img style={{ height: '40px' }} src={call} alt="" />
                            <p className="pt-1 mt-1">{' '} (+880)01710000000</p>
                        </div>
                        <div className="d-flex justify-content-around align-items-center">
                            <img style={{ height: '40px' }} src={message} alt="" />
                            <p className="pt-1 mt-1">{' '}tahmid5550@gmail.com</p>
                        </div>
                        <div className="d-flex justify-content-around align-items-center">
                            <img style={{ height: '40px' }} src={chat} alt="" />
                            <p className="pt-1 mt-1">{' '}Start Live Chat</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-1 text-center">
                        <h6>Our Travel Blog</h6>
                        <br />
                        <h6>Video Series</h6>
                        <br />
                        <h6>Meet Our Local Guide</h6>
                        <br />
                        <h6>Our Travel Blog</h6>
                    </div>
                    <div className="col-md-3 col-sm-1 text-center">
                        <h6>Travel Now!</h6>
                        <br />
                        <h6>Media & Press Room</h6>
                        <br />
                        <h6>Privacy And Policy</h6>
                        <br />
                        <h6>Cookies</h6>
                    </div>
                    <div className="col-md-3 col-sm-1 text-center">
                        <h5>Subscribe to Our NewsLetter</h5>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Recipient's Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Subs</button>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faFacebook} size={'2x'} /> {' '}
                            <FontAwesomeIcon icon={faInstagram}  size={'2x'}/>  {' '}
                            <FontAwesomeIcon icon={faTwitter}   size={'2x'}/> { ' '}
                            <FontAwesomeIcon icon={faLinkedinIn}  size={'2x'}/>
                        </div>
                    </div>
    
    
                </div>
               
            </div>
            <footer className="text-center">
                <small >?? Copyright {new Date().getFullYear()} TravelXP. All rights are reserved</small>
            </footer>
        </div>
    );
};

export default Footer;