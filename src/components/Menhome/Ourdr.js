import React from 'react'
import dentone from "../../assets/img/gallery/Anduela Curmaku.jpg"
import denttwo from "../../assets/img/gallery/Blerta Curmaku.jpg"
import dentthree from "../../assets/img/gallery/Ermal Cuadari.jpg"
import dentfour from "../../assets/img/gallery/Laurent Bixheku.jpg"
import dentfive from "../../assets/img/gallery/Leonard Maci.jpg"
import dentsix from "../../assets/img/gallery/Manuela Manjani.jpg"
import dentseven from "../../assets/img/gallery/Marvin Dedaj.jpg"
import denteight from "../../assets/img/gallery/Rudina Bitri.jpg"
import dentnine from "../../assets/img/gallery/Safjela Baja.jpg"
import { Link } from 'react-router-dom'
import Slider from "react-slick";


function Ourdr() {
    const setting = {
        dots: true,
        infinite: true,
        arrows: false,
        prevArrow: '<button type="button" className="slick-prev"><i className="far fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" className="slick-next"><i className="far fa-chevron-right"></i></button>',
        speed: 1000,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]}

    return (
        <>
            <section className="team-area2 fix p-relative pt-105 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 p-relative">
                            <div className="section-title center-align mb-50 text-center wow fadeInDown animated"
                                data-animation="fadeInDown"
                                data-delay=".4s" >

                                <h5>Il nostro dottore</h5>
                                <h2>Miglior dentista esperto</h2>
                            </div>
                        </div>
                    </div>
                    <Slider className="row team-active" {...setting}>
                        <div className="col-xl-4">
                            <div className="single-team mb-40">
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src={dentone} alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4>
                                        <Link to="team-single.html">Anduela Curmaku</Link>
                                    </h4>
                                    <p>Odontoiatria</p>
                                    <div className="team-social">
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link to="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="single-team mb-40">
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src={denttwo} alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4>
                                        <Link to="team-single.html">Blerta Curmaku</Link>
                                    </h4>
                                    <p>Segretaria</p>
                                    <div className="team-social">
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link to="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="single-team mb-40">
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src={dentthree} alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4>
                                        <Link to="team-single.html">Ermal Cuadari</Link>
                                    </h4>
                                    <p>Odontotecnico</p>
                                    <div className="team-social">
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link to="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="single-team mb-40">
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src={dentfour} alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4>
                                        <Link to="team-single.html">Laurent Bixheku</Link>
                                    </h4>
                                    <p>Odontoiatria</p>
                                    <div className="team-social">
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link to="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="single-team mb-40">
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src={dentfive} alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4>
                                        <Link to="team-single.html">Leonard Maci</Link>
                                    </h4>
                                    <p>Coordinatore della clinica per il turismo dentale</p>
                                    <div className="team-social">
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link to="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="single-team mb-40">
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src={dentsix} alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4>
                                        <Link to="team-single.html">Manuela Manjani</Link>
                                    </h4>
                                    <p>Odontoiatria</p>
                                    <div className="team-social">
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link to="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="single-team mb-40">
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src={dentseven} alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4>
                                        <Link to="team-single.html">Marvin Dedaj</Link>
                                    </h4>
                                    <p>Assistente dentista</p>
                                    <div className="team-social">
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link to="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="single-team mb-40">
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src={denteight} alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4>
                                        <Link to="team-single.html">Rudina Bitri</Link>
                                    </h4>
                                    <p>Addetto alla reception</p>
                                    <div className="team-social">
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link to="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="single-team mb-40">
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src={dentnine} alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4>
                                        <Link to="team-single.html">Safjela Baja</Link>
                                    </h4>
                                    <p>Odontoiatria</p>
                                    <div className="team-social">
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link to="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Ourdr