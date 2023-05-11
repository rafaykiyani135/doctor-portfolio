
import iconone from "../../assets/img/gallery/off01.png"
import icontwo from "../../assets/img/gallery/off02.png"
import iconthree from "../../assets/img/gallery/off3.png"
import iconfour from "../../assets/img/gallery/off4.png"
import { Link } from "react-router-dom"



function Offers(){
    return(
        <div>
                <div className="row justify-content-center" style={{textAlign:"center"}}>
                <div className="col-lg-3 col-md-6 col-sm-10 col-10" style={{marginBottom:"30px"}}>
  <div className="card" style={{minHeight:"450px"}}>
    <div className="card-body" style={{height:"100%"}}>
      <div className="offer-class">
        <div className="icon offer-class" style={{padding:"25px"}}>
          <img src={iconone} alt=''/>
        </div>
        <div>
          <br/>
        </div>
        <div className="flip-card" style={{height:"100%"}}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
            <h3>
            Prima visita e Preventivo Gratis
          </h3>
              <p>
                AnDent clinic offre cure dentistiche di alta qualità con odontoiatri professionisti. Offriamo ai nostri clienti anche una vacanza gratuita più soggiorno gratuito per 2 persone.
              </p>
              <h3 style={{fontSize:"15px"}}>
              (Tocca/Passa con il mouse)
              </h3>
            </div>
            <div className="flip-card-back">
              
              <Link to="/contact" className="btn">
                Prenota Appuntamento
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  <div className="col-lg-3 col-md-6 col-sm-10 col-10" style={{marginBottom:"30px"}}>
    <div className="card h-100 " style={{minHeight:"450px"}}>
      <div className="card-body">
        <div className="offer-class">
          <div className="icon offer-class" style={{padding:"25px"}}>
            <img src={icontwo} alt=''/>
          </div>
          <div>

            <br/>
          </div>
          <div className="flip-card" style={{height:"100%"}}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
              <h3>
              Allogio Gratuito
            </h3>
                <p>
                  Noi ti offriamo un soggiorno gratuito per 2 persone: alloggio in albergo a 4 stelle a 10 metri dalla clinica. Risparmierai sulle cure dentali, rispetto ai prezzi del tuo paese e potrai goderti la Tirana.
                </p>
                <h3 style={{fontSize:"15px"}}>
              (Tocca/Passa con il mouse)
              </h3>
              </div>
              <div className="flip-card-back">
                <Link to="/contact" className="btn">
                  Prenota Appuntamento
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-3 col-md-6 col-sm-10 col-10" style={{marginBottom:"30px"}}>
    <div className="card h-100" style={{minHeight:"450px"}}>
      <div className="card-body">
        <div className="offer-class">
          <div className="icon offer-class" style={{padding:"25px"}}>
            <img src={iconthree} alt=''/>
          </div>
          <br/>
          <div className="flip-card" style={{height:"100%"}}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
              <h3>
              Accoglienza in Aeroporto
            </h3>
            
                <p>
                Transfer dall’aeroporto gratuito e assistenza in italiano per tutta la durata delle cure.
                Transfer dall’aeroporto: al tuo arrivo all’aeroporto troverai ad attenderti un addetto all’accoglienza.
                </p>
                <h3 style={{fontSize:"15px"}}>
              (Tocca/Passa con il mouse)
              </h3>
              </div>
              <div className="flip-card-back">
                
                <Link to="/contact" className="btn">
                  Prenota Appuntamento
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-3 col-md-6 col-sm-10 col-10" style={{marginBottom:"30px"}}>
    <div className="card h-100" style={{minHeight:"450px"}}>
      <div className="card-body">
        <div className="offer-class">
          <div className="icon offer-class" style={{padding:"25px"}}>
            <img src={iconfour} alt=''/>
          </div>
          <div>

            <br/>
          </div>
          <div className="flip-card" style={{height:"100%"}}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
              <h3>
              Turimo Dentale
            </h3>
                <p>
                Assistenza in italiano dalle 9:00 alle 21:00 : saremo a tua disposizione dalle ore 9:00 
                fino alle 21:00 per aiutarti a risolvere qualsiasi problema durante il tuo soggiorno e farti 
                la guida turistica di Tirana e dei luoghi piu caratteristici dell’Albania.
                </p>
                <h3 style={{fontSize:"15px"}}>
              (Tocca/Passa con il mouse)
              </h3>
              </div>
              <div className="flip-card-back">
                <Link to="/contact" className="btn">
                  Prenota Appuntamento
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
        </div>
    );
}

export default Offers;