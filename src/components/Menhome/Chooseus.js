import React , { useState } from 'react'
import { Link } from 'react-router-dom';
import SliderOne from '../../assets/img/slider/slider-img.png'
import Slider from 'react-slick';
import imageOne from '../../assets/img/gallery/chooseus01.png'
import imageTwo from '../../assets/img/gallery/chooseus02.png'
import imageThree from '../../assets/img/gallery/chooseus03.png'
import imageFour from '../../assets/img/gallery/chooseus04.png'

function ChooseUs() {

    const settings = {
        infinite: true,
        autoplay:true,
        speed:5000,
        autoplaySpeed:5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
        <>
            <section id="home" className="slider-area fix p-relative">
                   <div className="container" style={{textAlign:"center"}}>
                    <div className="row align-items-center">
                        <div>
                        <div className="col-lg-12 section-title center-align mb-50 text-center font-face-andent-font-normal choose-us" style={{paddingTop:"20px"}}>
                            <h5 data-animation="fadeInUp" data-delay=".4s" style={{fontSize:"35px"}} >
                            Perché scegliere Andent
                            </h5>
                            <br/>
                            <br/>
                            <p data-animation="fadeInUp" data-delay=".6s" style={{fontSize:"20px"}}>
                            Il nostro staff è composto dai migliori chirurghi maxillo-facciali specializzati nelle migliori università europee. Il nostro staff è diretto dalla Dott.ssa Anduela Çurmaku, uno dei migliori dentisti in Albania.
                            </p>
                            <div style={{paddingTop:"75px"}}>
                                <h2>
                                    <Slider {...settings}>
                                        <div className='col-4 d-flex justify-content-center'>
                                            <span>
                                                <img src={imageOne} alt='image1'/>
                                            </span>
                                            &nbsp;
                                            <h4 style={{transform:"translate(0%,25%)",color: "#00173c"}}>
                                                Free Stay for 2 People
                                            </h4>
                                        </div>
                                        <div className='col-4 d-flex justify-content-center'>
                                            <span>
                                                <img src={imageTwo} alt='image1'/>
                                            </span>
                                            &nbsp;
                                            <h4 style={{transform:"translate(0%,25%)",color: "#00173c"}}>
                                                Certified Dentists
                                            </h4>
                                        </div>
                                        <div className='col-4 d-flex justify-content-center'>
                                            <span>
                                                <img src={imageThree} alt='image1'/>
                                            </span>
                                            &nbsp;
                                            <h4 style={{transform:"translate(0%,25%)",color: "#00173c"}}>
                                                Innovative Technology
                                            </h4>
                                        </div>
                                        <div className='col-4 d-flex justify-content-center'>
                                            <span>
                                                <img src={imageFour} alt='image1'/>
                                            </span>
                                            &nbsp;
                                            <h4 style={{transform:"translate(0%,19%)",color: "#00173c"}}>
                                                Treatment Success Guaranteed
                                            </h4>
                                        </div>
                                    </Slider>
                                </h2>
                            </div>
                        </div>
                        </div>
                    </div>
                   </div>
            </section>
    

        </>
    )
}

export default ChooseUs;