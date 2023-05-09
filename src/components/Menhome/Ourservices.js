import React from 'react'
import Iconone from '../../assets/img/icon/fe-icon01.png'
import IconFour from '../../assets/img/icon/fe-icon02.png'
import IconFive from '../../assets/img/icon/fe-icon03.png'
import IconSix from '../../assets/img/icon/fe-icon04.png'
import IconSeven from '../../assets/img/icon/fe-icon05.png'
import IconEight from '../../assets/img/icon/fe-icon06.png'
import Featuresservices from '../../assets/img/features/services-img-details2.png'
import "react-alice-carousel/lib/alice-carousel.css"
import ClinicOne from '../../assets/img/gallery/clinic01.jpg'
import ClinicTwo from '../../assets/img/gallery/clinic02.jpg'
import ClinicThree from '../../assets/img/gallery/clinic03.jpg'
import ClinicFour from '../../assets/img/gallery/clinic04.jpg'
import ClinicFive from '../../assets/img/gallery/clinic05.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'



function Ourservices() {


    const settings = {
        className: "sliderimage",
        dots: true,
        infinite: true,
        speed: 4000,
        autoplay:true,
        autoplaySpeed:4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
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
         <section id="service-details2" className="service-details-two pt-120 pb-105 p-relative font-face-andent-font-normal" style={{paddingTop:"10px"}}>
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center">
                        <h5>I nostri servizi</h5>
                        <h2>Cosa forniamo</h2>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="about-content s-about-content">
                        <ul className="sr-tw-ul text-right">
                        <li>
                            <div className="text">
                            <h4>Implantologia</h4>
                            <p>
                                Aenean eleifend turpis tellus, nec laoreet metus elementum
                                ac.
                            </p>
                            </div>
                            <div className="icon-right" style={{paddingTop:"15px"}}>
                            <img src={Iconone} alt="icon01" />
                            </div>
                        </li>
                        <li>
                            <div className="text">
                            <h4>Corone Dentali e Protesi Dentali</h4>
                            <p>
                                Aenean eleifend turpis tellus, nec laoreet metus elementum
                                ac.
                            </p>
                            </div>
                            <div className="icon-right" style={{paddingTop:"25px"}}>
                            <img src={IconFive} alt="icon01" />
                            </div>
                        </li>
                        <li>
                            <div className="text">
                            <h4>Endodonzia</h4>
                            <p>
                                Aenean eleifend turpis tellus, nec laoreet metus elementum
                                ac.
                            </p>
                            </div>
                            <div className="icon-right" style={{paddingTop:"15px"}}>
                            <img src={IconSeven} alt="icon01" />
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 text-center d-none d-lg-block">
                    <div className="sd-img">
                        <img src={Featuresservices} alt="img" />
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="about-content s-about-content">
                        <ul className="sr-tw-ul">
                        <li>
                            <div className="icon" style={{paddingTop:"12px"}}>
                            <img src={IconFour} alt="icon01" />
                            </div>
                            <div className="text pt-10">
                            <h4>Malattie Parondontali</h4>
                            <p>
                                Aenean eleifend turpis tellus, nec laoreet metus elementum
                                ac.
                            </p>
                            </div>
                        </li>
                        <li>
                            <div className="icon" style={{paddingTop:"15px"}}>
                            <img src={IconSix} alt="icon01" />
                            </div>
                            <div className="text pt-10">
                            <h4>Ortodonzia Invisalign</h4>
                            <p>
                                Aenean eleifend turpis tellus, nec laoreet metus elementum
                                ac.
                            </p>
                            </div>
                        </li>
                        <li>
                            <div className="icon" style={{paddingTop:"15px"}}>
                            <img src={IconEight} alt="icon01" />
                            </div>
                            <div className="text pt-10">
                            <h4>Faccette Dentali</h4>
                            <p>
                                Aenean eleifend turpis tellus, nec laoreet metus elementum
                                ac.
                            </p>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
         </section>

         <section className="about-area about-p pb-120 p-relative fix">
            <div className="container justify-content-center">
                    <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 justify-content-middle" >
                        <div className="s-about-img p-relative  wow fadeInLeft animated text-center sc" data-animation="fadeInLeft" data-delay=".4s">
                        <Slider {...settings}>
                
                        <div>
                            <img src={ClinicOne} className='img-fluid img sliderimage' alt=''/>
                        </div>
                        <div>
                            <img src={ClinicTwo} className='img-fluid img sliderimage' alt=''/>
                        </div>
                        <div>
                            <img src={ClinicThree} className='img-fluid img sliderimage' alt=''/>
                        </div>
                        <div>
                            <img src={ClinicFour} className='img-fluid img sliderimage' alt=''/>
                        </div>
                        <div>
                            <img src={ClinicFive} className='img-fluid img sliderimage' alt=''/>
                        </div>
                        </Slider>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="about-content s-about-content  wow fadeInRight  animated"  data-animation="fadeInRight" data-delay=".4s" >
                        <div className="about-title second-title pb-25" style={{textAlign:"center"}}>
                            <h2>Ci prendiamo cura della tua salute dentale</h2>
                        </div>
                        <p>
                        Servizio di cure odontoiatriche presso la Clinica Andent. Il Servizio si occupa della diagnosi e cura delle patologie del cavo orale che richiedono un trattamento chirurgico-ricostruttivo; effettua inoltre diagnosi di patologie che interessano più in generale il distretto orale e maxillo-facciale.

Diagnosi delle lesioni della mucosa orale (lesioni infiammatorie, preneoplastiche, neoplastiche) e trattamento delle stesse con protocollo tradizionale o con l'utilizzo di altre tecniche.

Diagnosi e trattamento chirurgico delle patologie dentali (estrazione dei denti, trattamento chirurgico o chirurgico-ortodontico delle inclusioni dentali, patologia periapicale).
                        </p>
                        </div>
                    </div>
                    </div>
            </div>
         </section>

    </>
  )
}

export default Ourservices