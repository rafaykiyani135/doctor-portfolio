import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../assets/img/gallery/veneer.jpg";

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
                  <h2>
Faccette Dentali</h2>
                  <p>
                  Le faccette sono la soluzione più estetica in caso di denti anteriori ingialliti, storti e scoloriti. Le faccette sono
posizionate in superficie e richiedono una leggera e minima digrigna del dente. Sono fatti di un sottile strato di porcellana o zirconia.
                  </p>

                  <div className="two-column">
                    <div className="row justify-content-center">
                      <div className="image-column col-xl-6 col-lg-12 col-md-12">
                        <figure className="image">
                          <img src={img} alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                  <h3>Come prendersi cura di facette ?</h3>
                  <p>
                  1-Lavarsi i denti tre volte al giorno
                  <br/>
                    2-Usate il filo interdentale almeno una volta al giorno
                    <br/>
                    3-visitare il dentista per vedere le condizioni dei denti e delle gengive
                    <br/>
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

export default First