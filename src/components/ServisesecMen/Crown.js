import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../assets/img/gallery/dental-crown-ba.jpg";


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
                  <h2> Corone Dentali e Protesi Dentali</h2>
                  <p>
                  Le corone dentali sono restauri artificiali che riportano la funzionalità dei denti rotti perduti o scheggiati
-Una corona può essere posizionata su delle radici artificiali (impianti)

Le protesi dentali FISSE comprendono sia le corone e i ponti fissati su denti naturali oppure sui impianti . Hanno un’elevata stabilità soprattutto ne casi di parodontopatia sopratutto quando i denti sono fuori della ossea. Quando mancano diversi denti, una soluzione è la protesi fissa cementata su un impianto oppure sui denti naturali. Nell caso in qui mancano i denti nelle due arcate la miglior soluzione e Protesi all on 6 che consiste 6 impianti dentali per ogni arcata dentale e un ponte su 12 denti per ogni arcata.
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
                  <h3>Perché scegliere questo servizio</h3>
                  <p>
                    
                  Stabilità: le protesi fisse sono cementate, quindi non possono essere rimosse.
                  </p>
                  <p>
                  Naturalezza: A causa della zirconia o del materiale ceramico che ha i ponti , i denti sembrano più vicini al naturale rispetto ai denti in resina della protesi rimovibile
Funzionalità: Poiché la protesi è posizionata sulla radice o sull’impianto, che sono fissati nell’osso, il paziente può mangiare meglio che con le protesi rimovibili.
                  </p>
                  <p>
                  Come prendersi cura delle corone dentali ?
                  <br/>
-lavare i denti dopo aver mangiato
<br/>
-Usa il filo interdentale
<br/>
-usa il colluttorio 2 volte a settimana per avere gengive più sane
<br/>
-visitare il dentista ogni 6 mesi per pulizie professionali
                  </p>
                  <p>
                  Cosa sono le faccette dentali ?<br/>
le faccette sono la soluzione più estetica in caso di denti anteriori ingialliti, storti e scolloriti. le faccette sono posizionate in superficie e richiedono una leggera e minima digrigna del dente. Sono fatti di un sottile strato di porcellana o zirconia.
                </p>    
                <p>
                Come prendersi cura di facette ?
                <br/>
-lavarsi i denti tre volte al giorno
<br/>
-Usate il filo interdentale almeno una volta al giorno
<br/>
-visitare il dentista per vedere le condizioni dei denti e delle gengive
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