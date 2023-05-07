import React from 'react'
import Callmenone from '../../assets/img/gallery/staff-together.JPG'
import { Link } from 'react-router-dom'
import Bgimg from '../../assets/img/bg/call-bg.png'

function Appointment() {
  return (
    <>
        <div className="call-area" style={{backgroundImage: `url(${ Bgimg })`, backgroundRepeat: "no-repeat",backgroundPosition: "bottom"}} >
            <div className="container" style={{padding:"50px"}}>
                <div className="row align-items-center">
                <div className="col-lg-5 col-lg-5 col-sm-12" style={{transform:"translate(-5%,6%)"}}>
                    <div className="single-counter-img fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                    <img src={Callmenone} alt="img" className="img" />
                    </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12">
                    <div className="call-text">
                    <h5>Prenota appuntamento dal dentista</h5>
                    <h2>Siamo aperti e accogliamo i pazienti</h2>
                    <Link to="/contact" className="btn">
                    Prenota Appuntamento
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>

    
    </>
  )
}

export default Appointment