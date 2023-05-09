import React from 'react'
import { Link } from 'react-router-dom'



function First() {
  return (
    <>
        <div className="col-lg-8">
            <div className="blog-details-wrap">
                <div className="details__content pb-30">
                <h2 className='heading-class'>
                Come ottenere un preventivo
                </h2>
                <p>
                Se hai bisogno di cure dentistiche nella nostra clinica ti offriamo un'assistenza completa e professionale per i tuoi problemi dentali. Puoi richiederci un preventivo senza impegno per le cure odontoiatriche per avere una stima dei costi. Troverai uno staff altamente qualificato e un servizio di cure odontoiatriche che comprende anche altri servizi. Compreso nel costo, oltre alla terapia, riceverai anche un soggiorno gratuito per 2 persone
                </p>
                <blockquote>
                    <div className="d-flex justify-content-center">
                        <Link to="/contact" className="btn">
                        RICHIEDI UN PREVENTIVO<br/>
                         SENZA IMPEGNO
                        </Link>
                    </div>
                </blockquote>
                <h2 className='heading-class'>
                Preventivo gratuito
                </h2>
                <p>
                Primo controllo gratuito Una volta compilata la scheda anamnestica, eseguita una TAC 3D (sono sufficienti 2-3 giorni) riceverai un piano di trattamento personalizzato, un preventivo dettagliato e, se lo desideri, potrai iniziare subito. Vantaggi - Trasferimento gratuito dall'aeroporto e assistenza in italiano anche se decidi di non accettare il preventivo. - Avrai un preventivo dettagliato e la possibilità di iniziare subito l'intervento. - Invio di una panoramica dentale. - Se hai una panoramica dentale e desideri ricevere un preventivo a distanza, puoi inviarlo ai nostri contatti ufficiali
                </p>
                </div>
            </div>
        </div>

    </>
  )
}

export default First