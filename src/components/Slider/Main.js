import React from 'react'
import SliderOne from '../../assets/img/slider/slider-img.png'
import { Link } from 'react-router-dom'


function Main() {
  return (
    <>
            <section id="home" className="slider-area fix p-relative">
                <div className="slider-active">
                <div className="single-slider slider-bg d-flex align-items-center" style={{backgroundImage: "url(img/slider/slider_bg.png)", backgroundSize: "cover"}}>
                   <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6 col-md-6">
                        <div className="slider-content s-slider-content mt-20 font-face-andent-font-normal" style={{paddingTop:"20px"}}>
                            <h5 data-animation="fadeInUp" data-delay=".4s">
                            Benvenuto ad Andent
                            </h5>
                            <h2 data-animation="fadeInUp" data-delay=".4s" style={{fontSize:"50px"}} >
                            Diretto da uno dei migliori dentisti in Albania.
                            </h2>
                            <p data-animation="fadeInUp" data-delay=".6s">
                            Il nostro personale è diretto dalla Dott.ssa Anduela Çurmaku, una delle migliori dentiste in Albania.
                            Andent è una tra le cliniche dentali migliori in Albania, la quale con i suoi 15 anni di esperienza sin 
                            dal 2007 ha offerto la soluzione ai problemi dentali a più di 15.000 pazienti provenienti da tutta l’Albania 
                            e l’Europa. La correttezza, la sicurezza, la garanzia massima delle apparecchiature e degli impianti e l’alta qualità 
                            europea ci hanno differenziato facendoci diventare leader nel settore albanese.
                            </p>
                            <div className='navigationBtn'>
                                <Link to="/about">
                                    <button className='btn'>
                                    Per saperne di più
                                    </button>
                                </Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-5 col-md-5 p-relative ">
                        <div className="banner-img img-fluid"style={{maxWidth:"100%",height:"auto"}}> 
                            <img src={SliderOne} className="img img-fluid"alt="banner" />
                        </div>
                        <div className="s-aliment-1 ">
                            <div className="aliment-content">
                            <h3 className="h3-title">Dr. Anduela Çurmaku</h3>
                            <p>Direttrice</p>
                            </div>
                        </div>
                        </div>
                    </div>
                   </div>
                </div>
                </div>
            </section>
    
    </>
  )
}

export default Main