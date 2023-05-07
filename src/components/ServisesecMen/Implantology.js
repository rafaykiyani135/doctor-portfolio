import React from 'react'
import before from "../../assets/img/gallery/implantbefore.jpg";
import after from "../../assets/img/gallery/implantafter.jpg";


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
                  <h2> Diamo i migliori servizi</h2>
                  <p>
                  Gli impianti dentali sono usati per ridonare la funzione e l’estetica dentale.

Il dente naturale è  formato da due parti:

1- Radice che va sostituito dall'impianto.

un impianto è una vite di materiale biocompatibile che riduce le allergie ,le infiammazioni e si integra perfettamente all'osso e quindi torna la funzionalità  del dente al 100%.

La procedura che eseguiamo in un impianto dentale

La prima fase - diagnosi: Prima visita gratuita dal dentista, ad occhio nudo o attraverso una scan 3d. Andremo a constatare se
è opportuno un impianto oppure no.

La seconda fase - intervento: L”intervento avviene in anestesia locale e poi procediamo a inserire nell’osso l’impianto. Questa procedura non dura più di 20 minuti

OSTEOINTEGRAZIONE: l’impianto dentale per integrarsi nell’osso necessita dai 3 ai 6 mesi.

FASE FINALE:  Andrà fissata la corona dentale in zircone oppure in ceramica.
                  </p>

                  <div className="two-column">
                    <div className="row">
                      <div className="image-column col-xl-6 col-lg-12 col-md-12">
                        <figure className="image">
                          <img src={before} alt="" />
                        </figure>
                      </div>
                      <div className="text-column col-xl-6 col-lg-12 col-md-12">
                        <figure className="image">
                          <img src={after} alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                  <h3>Perché scegliere questo servizio</h3>
                  <p>
                  Vantaggi degli impianti dentali

                  1-Sono fissati in modo permanente e sicuro

                  2-Non comportano problemi per i denti naturali che sono vicini

                  3-Se esegui una corretta igiene orale hanno una estrema duratura.

                  Percentuali di successo: dal 2015 abbiamo realizzato oltre 15.000 interventi di implantologia con una percentuale di successo del 99% .

                  Stabilità: Nessun problema di masticazione e nessun rischio di mobilità del dente artificiale.

                  Nella clinica ANDENT utilizziamo uno dei 2 migliori impianti al mondo chiamato MEGA GEN. Viene fornito un certificato di garanzia che contiene tutti i dati dell'impianto inserito al paziente.

                  Massimo Standard di igiene e protocolli consolidati per l'inserimento implantare. Il paziente non avvertirà dolore, nè avrà gonfiore, se segue i consigli del medico. Assistenza continua da parte di un team qualificato per questa procedura.
                  </p>
                  <p>
                    Complete account of the systems and expound the actually teachings
                    of the great explorer of the truth, the master-builder of human
                    uts happiness. No one rejects, dislikes, or avoids pleasure
                    itself, because it is pleasure, but because those who do not know
                    how to pursue pleasure rationally.
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
                            <p>
                            Noi non siamo una clinica di basso costo.

Andent non è una clinica a ‘basso costo’, però i nostri prezzi sono accessibili solo per il fatto che il nostro sistema fiscale ed i costi della vita in Albania sono i più bassi in tutta l’Europa, dandoci la possibilità di offrire la stessa qualità di odontoiatria che si trova in Europa, ma con il 50% in meno nel prezzo.

Noi crediamo che il miglior marketing per Andent sia il cliente soddisfatto, perciò nella nostra esperienza di alcuni anni ha influenzato l’ottimo lavoro fatto a ciascun cliente, il quale ne è uscito molto contento dal nostro lavoro, suggerendoci, così, ad altri pazienti. Per questo motivo ogni paziente prende sicurezza e garanzia massima del servizio dentale offerto da Andent, in questo modo siamo riusciti ad essere tra i migliori in questo settore.
                            </p>
                            <br/>
                            <p>
                            Quali sono le qualità di una clinica senza basso costo. (No Low Cost).
                            Materiali certificati con passaporto implantare come abbiamo menzionato anche sopra, noi usiamo uno tra i due migliori impianti nel mondo. Megagen per una sicurezza 100% massimale.
                            Il personale medico è ottimo e qualificato, formato dai migliori chirurghi maxillo- facciali in Albania, assistente e anestesista qualificati, e l’intero personale è certificato e preparato in Europa, inoltre parlano tutti perfettamente l’italiano.
                            Esami pre-intervento per pianificare l’intervento con massima sicurezza.
                            La tecnologia più moderna nelle attrezzature cliniche, orientata per interventi precisi.
                            Gli standard più alti dell’igiene in massima sicurezza seguendo i protocolli dell’Unione Europea.
                            Clinica in centro di Tirana.
                            Hotel\ Albergo con quattro stelle per un accomodamento più confortevole durante il tempo dell’ intervento.
                            100% risultati garantiti.
                            Nel nostro personale abbiamo professionisti in grado di intervenire anche nelle situazioni più complesse, come per esempio pazienti con problemi al cuore o malati di diabete.
                            </p>
                            <br/>
                            <p>
                            Fate attenzione : <br/>
                            Non siamo ‘un’impresa regolativa’ tra il cliente e il paziente, noi siamo la clinica stessa Andent situata nel quore di Tirana con 15 anni di eperienza.

                            Dovete fare molta attenzione a chi affidate la vostra salute orale. State sempre sicuri dove andare sapendo il nome della clinica, la sicurezza che offre, i tipi di impianti che usa, chi sono i medici e le loro certificazioni e l’intero personale nella clinica. Non mostrate fiducia a terze agenzie, affidatevi al personale di Andent per una qualità e garanzia massima, ed un prezzo fantastico.

                            Durante la permanenza offriamo gratuito inclusi nel costo del trattamento:

                            Hotel gratuito con quattro stelle solo a 10 metri dalla clinica per due persone durante il tempo del trattamento.
                            Accoglieza in Aeroporto e il trasferimento nella clinica e alla fine il ritorno in aeroporto dopo il trattamento.
                            Assistenza nella lingua italiana dall’intero personale.
                            Numero di telefono albanese in base alla necessità.
                            La qualità e la garanzia ci differenziano.
                            </p>
                          </div>
                        </div>
                       
                        <div className="tab" id="prod-spec">
                          <div className="content">
                            <p>
                              Suspendisse laoreet at nulla id auctor. Maecenas in dui
                              cursus, lacinia nisl non, blandit lorem. Aliquam vel
                              risus hendrerit, faucibus nisl a, porta sapien. Etiam
                              iaculis mattis quam, nec iaculis velit feugiat quis.
                              Pellentesque sed feugiat dui, ac euismod leo.
                            </p>
                          </div>
                        </div>
                        <div className="tab" id="prod-reviews">
                          <div className="content">
                            <p>
                              Suspendisse laoreet at nulla id auctor. Maecenas in dui
                              cursus, lacinia nisl non, blandit lorem. Aliquam vel
                              risus hendrerit, faucibus nisl a, porta sapien. Etiam
                              iaculis mattis quam, nec iaculis velit feugiat quis.
                              Pellentesque sed feugiat dui, ac euismod leo.
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