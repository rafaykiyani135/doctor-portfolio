import React from 'react';
import img from '../../assets/img/gallery/alignment.jpg';
import { Link } from 'react-router-dom';

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
                  <h2> Ortodonzia Invisalign</h2>
                <br/>

                  <div className="two-column">
                    <div className="row justify-content-center">
                      <div className="image-column col-xl-6 col-lg-12 col-md-12">
                        <figure className="image">
                          <img src={img} alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                  <h3>Perché scegliere questo servizio</h3>
                    <h3>
                  -Estetica
                  </h3>
                <p>
                le mascherine sono trasparenti, ecco perché sono più estetiche delle bracket metalliche
                  </p>

                  <h3>
                  -Sono mobili
                  </h3>
                <p>
                il paziente può rimuoverla e indossarla da solo e la continuazione del trattamento può essere effettuata cambiandola al paziente ogni due settimane
                  </p>

                  <h3>
                  -Risultato veloce
                  </h3>
                <p>
                mentre con apparecchi odontoiatrici ci vogliono da 1 a 2 anni, il risultato con le mascherine può essere raggiunto per un periodo di 6 mesi
                </p>

                <h3>
                -Sono comodi
                </h3>
                <p>
                non provoca dolore o irritazione alle gengive grazie al materiale liscio
                </p>
                  

                 
                  <div className="product-info-tabs">
                    
                    <div className="prod-tabs tabs-box">
                     
                      <ul className="tab-btns tab-buttons clearfix">
                        <li data-tab="#prod-details" className="tab-btn active-btn">
                        Attenzione
                        </li>
                      </ul>
                     
                      <div className="tabs-content">
                        
                        <div className="tab active-tab" id="prod-details">
                          <div className="content">
                            <p>
                            Non tutti i problemi ortodontici (distorsione dei denti, morso traumatico) 
                            possono essere risolti con ortodonzia invisalign. pertanto, per ottenere il 
                            risultato desiderato, è necessaria una diagnosi preliminare da parte dei 
                            professionisti della nostra clinica per esaminare il caso e verificare se può 
                            essere risolto con mascherina o meno.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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