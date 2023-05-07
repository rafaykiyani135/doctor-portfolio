
import iconone from "../../assets/img/gallery/off01.png"
import icontwo from "../../assets/img/gallery/off02.png"
import iconthree from "../../assets/img/gallery/off3.png"
import iconfour from "../../assets/img/gallery/off4.png"
import Bgimg from '../../assets/img/bg/call-bg.png'



function Offers(){
    return(
        <div>
                <div className="row justify-content-center" style={{textAlign:"center"}}>
                    <div className="col-lg-2 rounded-corner" style={{background:"red",backgroundImage: `url(${ Bgimg })`}}>
                        <div>
                            <div className="icon offer-class" style={{padding:"25px"}}>
                                <img src={iconone}/>
                            </div>
                            <div className="offer-class">
                                <div>
                                <h4>
                                    Prima visita e Preventivo Gratis
                                </h4>
                                <br/>
                                </div>
                                <div style={{paddingBottom:"30px"}}>
                                <p>
                                AnDent clinic offre cure dentistiche di alta qualità con odontoiatri professionisti . Offriamo ai nostri clienti anche una vacanza gratuita più soggiorno gratuito per 2 persone.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <div className="col-lg-2 rounded-corner" style={{background:"red",backgroundImage: `url(${ Bgimg })`}}>
                        <div>
                            <div className="icon offer-class" style={{padding:"25px"}}>
                                <img src={icontwo}/>
                            </div>
                            <div className="offer-class">
                                <div>
                                <h4>
                                    Allogio Gratuito
                                </h4>
                                <br/>
                                </div>
                                <div style={{paddingBottom:"30px"}}>
                                <p>
                                Noi ti offriamo un soggiorno gratuito per 2 persone: alloggio in albergo a 4 stelle a 10 metri dalla clinica. Risparmierai sulle cure dentali ,rispetto ai prezzi del tuo paese e potrai goderti la Tirana.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <div className="col-lg-2 rounded-corner" style={{background:"red",backgroundImage: `url(${ Bgimg })`}}>
                        <div>
                            <div className="icon offer-class" style={{padding:"25px"}}>
                                <img src={iconthree}/>
                            </div>
                            <div className="offer-class">
                                <div>
                                <h4>
                                Accoglienza in Aeroporto
                                </h4>
                                <br/>
                                </div>
                                <div style={{paddingBottom:"30px"}}>
                                <p>
                                Transfer dall’aeroporto gratuito e assistenza in italiano per tutta la durata delle cure.
Transfer dall’aeroporto: al tuo arrivo all’aeroporto troverai ad attenderti un addetto all’accoglienza.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <div className="col-lg-2 rounded-corner" style={{background:"red",backgroundImage: `url(${ Bgimg })`}}>
                        <div>
                            <div className="icon offer-class" style={{padding:"25px"}}>
                                <img src={iconfour}/>
                            </div>
                            <div className="offer-class">
                                <div>
                                <h4>
                                Turimo Dentale
                                </h4>
                                <br/>
                                </div>
                                <div style={{paddingBottom:"30px"}}>
                                <p>
                                Assistenza in italiano dalle 9:00 alle 21:00 : saremo a tua disposizione dalle ore 9:00 fino alle 21:00 per aiutarti a risolvere qualsiasi problema durante il tuo soggiorno e farti la guida turistica di Tirana e dei luoghi piu caratteristici dell’Albania.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Offers;