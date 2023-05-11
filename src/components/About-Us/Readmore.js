import Slider from "react-slick";
import imgone from "../../assets/img/gallery/rm1.jpg"
import imgtwo from "../../assets/img/gallery/rm2.jpg"
import imgthree from "../../assets/img/gallery/rm3.jpg"
import imgfour from "../../assets/img/gallery/rm4.jpg"
import imgfive from "../../assets/img/gallery/rm5.jpg"
import { Link } from "react-router-dom";


function Readmore(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        fade:true,
        autoplaySpeed:3000,
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


    return(
        <div>
            <div className="container" style={{paddingTop:"100px",paddingBottom:"100px"}}>
  <div className="row justify-content-between" style={{paddingTop:"50px"}}>
    <div className="col-lg-6 col-md-6 text-left about-us">
      <h2>
        Chi siamo
      </h2>
      <br/>
      <p style={{fontSize:"17px"}}>
        Il nostro staff è diretto dalla Dott.ssa Anduela Çurmaku, uno dei migliori dentisti in Albania.
        Andent è una delle migliori cliniche dentistiche in Albania, che con i suoi 15 anni di esperienza dal 2007 ha offerto la soluzione ai problemi dentali a più di 15.000 pazienti provenienti da tutta l'Albania e dall'Europa. Correttezza, sicurezza, la massima garanzia delle attrezzature e degli impianti e l'alta qualità europea ci hanno differenziato rendendoci leader nel settore albanese.

        Con un'ampia gamma di servizi Andent ha offerto in tutti questi anni la soluzione ai problemi di salute orale a partire dagli impianti dentali indolori, alla rigenerazione ossea dentale, dai problemi di piorrea alle protesi dentarie, dall'estetica dentale alla correzione dei difetti dentali alle patologie del complesso cranio-cervico-mandibolare. Il nostro staff è composto dai migliori chirurghi maxillo-facciali specializzati nelle migliori università europee.
      </p>
      <div className='navigationBtn'>
        <Link to="/Contact">
          <button className='btn'>
            Contattaci
          </button>
        </Link>
      </div>
    </div>
    <div className="col-lg-6 col-md-6 text-center">
      <div className="slider-content justify-content-center sc">
        <Slider {...settings}>
          <div>
            <img src={imgone} className="img-fluid" alt="img-data"/>
          </div>
          <div>
            <img src={imgtwo} className="img-fluid " alt="img-data"/>
          </div>
          <div>
            <img src={imgthree} className="img-fluid " alt="img-data"/>
          </div>
          <div>
            <img src={imgfour} className="img-fluid " alt="img-data"/>
          </div>
          <div>
            <img src={imgfive} className="img-fluid " alt="img-data"/>
          </div>
        </Slider>
      </div>
    </div>
  </div>
</div>
        </div>
    );  
}

export default Readmore;