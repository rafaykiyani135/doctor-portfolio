import React from 'react'
import img from '../../assets/img/gallery/endodontics.jpg';

import { Link } from 'react-router-dom'


function Align() {
  return (
    <>
      
      <div className="about-area5 about-p p-relative">
        <div className="container pt-120 pb-90">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 order-1">
              <aside className="sidebar services-sidebar">
                <div className="sidebar-widget categories">
                  <div className="widget-content">
                    <ul className="services-categories">
                    <li>
                      <Link to="/implantology">Implantologia</Link>
                  </li>
                  <li>
                      <Link to="/crown">Corone Dentali e Protesi Dentali</Link>
                  </li>
                  <li>
                      <Link to="/endodontics"> Endodonzia</Link>
                  </li>
                  <li>
                      <Link to="/periodontal-diseases">Malattie Parondontali</Link>
                  </li>
                  <li>
                      <Link to="/align-orthodontics">Ortodonzia Invisalign</Link>
                  </li>
                  <li>
                      <Link to="/dental-veneers">Faccette Dentali</Link>
                  </li>
                    </ul>
                  </div>
                </div>
                
                <div className="service-detail-contact wow fadeup-animation" data-wow-delay="1.1s">
                  <h3 className="h3-title">Se hai bisogno di aiuto, contattaci</h3>
                  <Link to="/contact" title="Call now">
                  +393792993475
                  </Link>
                </div>
              </aside>
            </div>
           
            <div className="col-lg-8 col-md-12 col-sm-12 order-2">
              <div className="service-detail">
                <div className="content-box">
                  <h2> Endodonzia </h2>
                

                  <div className="one-column">
                    <div className="row justify-content-center">
                      <div className="image-column col-xl-6 col-lg-12 col-md-12">
                        <figure className="image">
                          <img src={img} alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                  <h3>Perché scegliere questo servizio</h3>
                  <p>
                  L’endodonzia si occupa di curare la polpa dentale e i tessuti che circondano il dente. 
                  Quando è necessaria l'endodonzia? -forte dolore durante la notte -sensibilità prolungata al freddo, dolce, 
                  caldo e infezioni -forte dolore durante la masticazione ci sono casi in cui non si hanno i sintomi di cui sopra, 
                  ma un controllo di routine con una cartella dentale mostra la presenza di un'infezione che potrebbe derivare da un 
                  precedente trattamento endodontico errato o morte spontanea del nervo all'interno del canale
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Align;