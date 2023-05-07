import clinic from "../../assets/img/gallery/clinic03.jpg"

function Security(){
    return(
        <div>
            <div className="container" style={{paddingTop:"100px",paddingBottom:"100px"}}>
                <div className="row justify-content-betweem" style={{paddingTop:"50px"}}>
                    <div className="col-lg-6 col-md-12 col-sm-12 text-left about-us">
                        <h2>
                        Protocollo di sicurezza
                        </h2>
                        <br/>
                        <p style={{fontSize:"18px"}}>
                        Per garantire la tutela della salute di tutti, Andent Clinic persegue le migliori pratiche di odontoiatria e i più elevati standard di igiene qualitativa. Negli studi odontoiatrici multiprofessionali Andent Clinic sono da sempre adottati specifici protocolli di sicurezza e igiene conformi alle linee guida internazionali.

Per garantire il miglior servizio possibile, utilizziamo gli strumenti più moderni del settore durante tutti i trattamenti nelle cliniche odontoiatriche Andent:
                        </p>
                        <div className="list">
                        <ul>
                            <li>Scanner intra ed extraorale Scanner intra ed extraorale</li>
                            <li>Tecnologia laser</li>
                            <li>DNA test and bacterial test</li>
                            <li>Test del DNA e test batterico</li>
                            <li>TAC dentale 3D</li>
                        </ul>
                        </div>
                        <br/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12" style={{}}>
                        <img src={clinic} alt="clinicpicture"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Security;