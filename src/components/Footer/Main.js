import React from 'react'
import Logo from '../../assets/img/gallery/andent-logo.png'
import { Link } from 'react-router-dom'



function Main() {
  return (
    <>
        <footer className="footer-bg footer-p pt-90" style={{ backgroundColor: "#00173c" }}>
                <div className="footer-top pb-70">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title" style={{width:"700px",height:"auto",transform:"translate(0,-15%)"}}>
                                    <img src={Logo} alt="logo" />
                                </div>
                                <div className="footer-link">
                                <p>
                                    Mauris non nisi semper, lacinia neque in, dapibus leo. Curabitur
                                    sagittis libero tincidunt tempor finibus. Mauris at dignissim
                                    ligula, nec tristique orci.Quisque vitae metus.
                                </p>
                                <div className="f-contact">
                                    <ul>
                                    <li>
                                        <i className="icon fal fa-clock" />
                                        <span>
                                        Lunedi - Venerdì:
                                        <br />
                                        9:00am - 08:00pm
                                        </span>
                                    </li>
                                    <li>
                                        <i className="icon fal fa-clock" />
                                        <span>
                                        Sabato:
                                        <br />
                                        9:00am - 01:00pm
                                        </span>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                <h2>Altri collegamenti</h2>
                                </div>
                                <div className="footer-link">
                                <ul>
                                    <li>
                                    <Link to="/"> Home</Link>
                                    </li>
                                    <li>
                                    <Link to="/about">About Us</Link>
                                    </li>
                                    <li>
                                    <Link to="/service">Services</Link>
                                    </li>
                                    <li>
                                    <Link to="/gallery"> Project</Link>
                                    </li>
                                    <li>
                                    <Link to="/team">Our Team</Link>
                                    </li>
                                    <li>
                                    <Link to="/blog">Latest Blog</Link>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                <h2>I nostri servizi</h2>
                                </div>
                                <div className="footer-link">
                                <ul>
                                    <li>
                                    <Link to="/singleservice">Implantologia</Link>
                                    </li>
                                    <li>
                                    <Link to="/singleservice">Corone Dentali e Protesi &nbsp;  &nbsp; &nbsp; &nbsp;Dentali</Link>
                                    </li>
                                    <li>
                                    <Link to="/singleservice">Endodonzia</Link>
                                    </li>
                                    <li>
                                    <Link to="/singleservice">Malattie Parondontali</Link>
                                    </li>
                                    <li>
                                    <Link to="/singleservice">Faccette Dentali</Link>
                                    </li>
                                    <li>
                                    <Link to="/singleservice">Ortodonzia Invisalign</Link>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-sm-6" style={{textAlign:"center"}}>
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title" style={{textAlign:"center"}}>
                                <h2> &nbsp; &nbsp;  &nbsp; Contattaci</h2>
                                </div>
                                <div className="f-contact">
                                <ul>
                                    <li>
                                    <i className="icon fal fa-map-marker-check" />
                                    <span>
                                        <a href='https://www.google.com/maps/place/Dentisti+in+Albania+-+Andent+Clinic/@41.3305151,19.8189557,15z/data=!4m6!3m5!1s0x135031303fe86d0b:0x7d2830bb4995e303!8m2!3d41.3305151!4d19.8189557!16s%2Fg%2F11rpmkjphg' target="_blank" rel="noopener noreferrer">1247/Rr.Bardhok Bilba,Pall Golden trema,Shk.B,Kati 4 Tirana,Albania</a>
                                    </span>
                                    </li>
                                    <li>
                                    <i className="icon fal fa-phone" />
                                    <p style={{transform:"translate(0%,45%)"}}>
                                    +393792993475
                                    </p>
                                    </li>
                                    <li>
                                    <span> 
                                    <i className="icon fal fa-envelope" />
                                    </span>
                                    <p style={{transform:"translate(0,45%)"}}>
                                        <a href="mailto:info@andentclinic.al">info@andentclinic.al</a>
                                    </p>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-wrap">
                    <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                        <div className="copy-text">
                            Copyright © 2023 Andent. All rights reserved.
                        </div>
                        </div>
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                        <div className="footer-social">
                            <a href='https://www.facebook.com/'>
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href='https://www.instagram.com/'>
                                <i className="fab fa-instagram" />
                            </a>
                            <a href='https://twitter.com/'>
                                <i className="fab fa-twitter" />
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </footer>

    </>
  )
}

export default Main