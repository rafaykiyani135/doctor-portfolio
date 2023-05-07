import React from 'react'
import img from '../../assets/img/gallery/paradontal.jpg';
import { Link } from 'react-router-dom'


function First() {
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
                  <h2>Malattie Parondontali</h2>
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
                  <p>
                Malattia gengivale
                <br/>
                Gengivite:
                <br/>
                -E una lieve infiammazione delle gengive che può derivare da una scarsa igiene orale
                <br/>
                -e causato da malattie generali come il diabete, l’infezione da HIV
                <br/>
                -Causato da consumo di tabacco o sostanze stupefacenti
                  </p>
                  <h2>
                  Paradontite: 
                  </h2>
                  <p>
                  l’infiammazione dell’osso e dei tessuti dei denti.
                è accompagnato non solo da arrossamento, irritazione, dolore, gonfiore del dente, ma anche dal suo spellatura, che porta la mobilità dei denti. Le cause possono essere diverse, dalla mancanza di igiene alla genetica.
                  </p>
                 
                  <div className="product-info-tabs">
                    
                    <div className="prod-tabs tabs-box">
                     
                      <ul className="tab-btns tab-buttons clearfix">
                        <li data-tab="#prod-details" className="tab-btn active-btn">
                        Importante
                        </li>
                      </ul>
                     
                      <div className="tabs-content">
                        
                        <div className="tab active-tab" id="prod-details">
                          <div className="content">
                            <h2>
                            Sintomi della malattia:
                            </h2>
                          <p className='para-class'>
                        -eruzione cutanea e alito cattivo
                        <br/>
                        -sanguinamento mentre si lava la bocca
                        <br/>
                        -dolore soprattutto durante il morso
                        <br/>
                        -gonfiore delle gengive
                        <br/>
                        -mobilità dei denti
                        <br/>
                        -pus nelle gengive
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

export default First