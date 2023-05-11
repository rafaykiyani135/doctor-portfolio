import React from 'react'
import Callmenone from '../../assets/img/gallery/staff-together.JPG'
import { Link } from 'react-router-dom'
import Bgimg from '../../assets/img/bg/call-bg.png'

function Appointment() {
  return (
    <>
        <div className="call-area" style={{backgroundImage: `url(${ Bgimg })`}}>
        <div className="container py-5">
            <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="single-counter-img text-center text-lg-start mb-5 mb-lg-0">
                <img src={Callmenone} alt="img" className="img-fluid" />
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-start">
                <div className="call-text">
                <h5 className="mb-3">Prenota appuntamento dal dentista</h5>
                <h2 className="mb-4">Siamo aperti e accogliamo i pazienti</h2>
                <Link to="/contact" className="btn btn-primary">
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