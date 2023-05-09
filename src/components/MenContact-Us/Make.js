import React from 'react'


function Make() {
  return (
    <>
        <section id="contact" className="contact-area after-none contact-bg pt-120 pb-120 p-relative fix" >
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-4 order-2">
                  <div className="contact-info">
                    <div className="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" >
                      <div className="f-cta-icon">
                        <i className="far fa-map" />
                      </div>
                      <h5>Indirizzo dell'ufficio</h5>
                      <p>
                      1247 Rr.Bardhok Bilba, Pall Golden trema, Shk.B,Kati 4 Tirana, Albania
                      </p>
                    </div>
                    <div
                      className="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" >
                      <div className="f-cta-icon">
                        <i className="far fa-clock" />
                      </div>
                      <h5>Ore lavorative</h5>
                      <p>
                      Lunedi - Venerdì: 9:00am - 08:00pm <br />
                      Sabato: 9:00am - 01:00pm
                      </p>
                    </div>
                    <div className="single-cta wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" >
                      <div className="f-cta-icon">
                        <i className="far fa-envelope-open" />
                      </div>
                      <h5>Inviaci un messaggio</h5>
                      <p>
                      <a href="mailto:info@andentclinic.al">info@andentclinic.al</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 order-1">
                  <div className="contact-bg02">
                    <div className="section-title center-align">
                      <h2>Prendere appuntamento</h2>
                    </div>
                    <form action="mail.php" method="post" className="contact-form mt-30">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="contact-field p-relative c-name mb-20">
                            <input type="text" id="firstn" name="firstn" placeholder="Nome di battesimo" required="" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-field p-relative c-subject mb-20">
                            <input type="text" id="email" name="email" placeholder="E-mail" required="" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-field p-relative c-subject mb-20">
                            <input type="text" id="phone" name="phone" placeholder="Numero di telefono." required="" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-field p-relative c-subject mb-20">
                            <input type="text" id="subject" name="subject" placeholder="Soggetto" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="contact-field p-relative c-message mb-30">
                            <textarea name="message" id="message" cols={30} rows={10} placeholder="Scrivi commenti" defaultValue={""} />
                          </div>
                          <div className="slider-btn">
                            <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s" >
                              <span>Invia ora</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </section>

    </>
  )
}

export default Make