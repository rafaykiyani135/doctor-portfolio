import clinic from "../../assets/img/gallery/clinic-front.jpg"
import { Link } from 'react-router-dom'

function First() {

    return (
        <>
            <div className="bsingle__post mb-50">
                <div className='d-flex justify-content-center'>
                    <img height="70%" src={clinic} alt="" />
                </div>
                <br/>
                <div className="bsingle__content">
                    <div className="meta-info">
                        <p>
                        Coordinato da Leonardo Maci
                        </p>
                    </div>
                    <h2>
                    Turismo dentale e servizi inclusi
                    </h2>
                    <p>
                    La clinica AnDent offre cure dentistiche di alta qualità con dentisti professionisti. Offriamo inoltre ai nostri clienti una vacanza gratuita più un soggiorno gratuito per 2 persone, risparmierai sulle cure dentistiche, rispetto ai prezzi del tuo paese e potrai goderti Tirana. Ogni anno sempre più pazienti italiani scelgono l'Albania per le loro cure odontoiatriche.
                    </p>
                    <div className="blog__btn">
                        <Link to="/contact" className="btn">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bsingle__post mb-50">
                <div className="bsingle__post-thumb video-p d-flex justify-content-center">
                   
                </div>
                <div className="bsingle__content">
                    <h2>
                    Vantaggi del turismo dentale
                    </h2>
                    <p>
                        <ul>
                            <li>Oltre a beneficiare di cure odontoiatriche professionali, con prodotti certificati e risparmiando il 70% rispetto all'Italia, puoi approfittare del tempo libero tra un intervento e l'altro per goderti una vacanza.</li>
                            <li>Ti offriamo un soggiorno gratuito per 2 persone: sistemazione in hotel 4 stelle a 10 metri dalla clinica.</li>
                            <li>Trasferimento gratuito dall'aeroporto e assistenza in lingua italiana per tutta la durata dei trattamenti.</li>
                            <li>Trasferimento dall'aeroporto: un addetto alla reception ti aspetterà al tuo arrivo in aeroporto.</li>
                            <li>Assistenza in italiano dalle 9 alle 21: saremo a tua disposizione dalle 9.00 alle 21.00 per aiutarti a risolvere qualsiasi problema durante il tuo soggiorno ed essere la tua guida turistica per Tirana e i luoghi più caratteristici dell'Albania. Il nostro addetto alla reception ti lascerà il suo recapito telefonico e potrai contattarlo a qualsiasi ora del giorno e della notte.</li>
                        </ul>
                    </p>
                    <h2>
                    Ritrova il tuo sorriso con il turismo dentale.
                    </h2>
                    <p>
                    Potrai muoverti agevolmente per le vie della città e scoprire i migliori ristoranti, pub, discoteche e i locali più caratteristici dell'Albania.
Ti daremo tutte le informazioni e i consigli necessari per vivere al meglio il tuo soggiorno a Tirana.
                    </p>
                    <ul>
                        <li>Viaggio</li>
                        <li>Alloggio</li>
                        <li>Tradurre</li>
                        <li>Giro turistico</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default First