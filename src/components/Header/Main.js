import React, { useState } from 'react'
import Logo from '../../assets/img/gallery/andent-logo.png'
import { Link } from 'react-router-dom'

function Main() {

    const [mobile, setmobile] = useState(false);
    const [Services, setServices] = useState(false)
    const [Blog, setBlog] = useState(false)

    return (
        <>
            <header className="header-area header-three">
                <div className="header-top second-header d-none d-md-block" >
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-8 d-none d-lg-block">
                                <div className="header-cta">
                                    <ul>
                                        <li>
                                            <i className="icon fal fa-envelope" />
                                            <span><a href="mailto:info@andentclinic.al">info@andentclinic.al</a></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 d-none d-lg-block text-right">
                                <div className="header-social">
                                    <span>
                                        <a href='https://web.facebook.com/andentclinic/photos/?paipv=0&eav=Afayyl7xCas_ZymSGnK2auprjcZm9-9HW84Tlkmt6Ju_bChmyyv-uiaqCYHOQk99a_o&_rdc=1&_rdr' title="Facebook">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href='https://www.instagram.com/andent_clinic/?hl=en' title="LinkedIn">
                                            <i className="fab fa-instagram" />
                                        </a>
                                        <a href='https://www.youtube.com/@andentclinic3059' title="Twitter">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="header-sticky" className="menu-area sticky-menu" style={{ backgroundColor: "white" }}>
                    <div className="container">
                        <div className="second-menu">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-2">
                                    <div className="logo" style={{width:"300px",margin:"auto"}}>
                                        <Link to="/">
                                            <img src={Logo} alt="logo" />
                                            </Link>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-7">
                                    <div className="main-menu text-right text-xl-right">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-sub">
                                                    <Link to="/">Casa</Link>
                                                </li>
                                                <li className='has-sub'>
                                                    <Link to="/about">Chi siamo</Link>
                                                </li>
                                                <li className="has-sub">
                                                    <Link to="/implantology">Servizi</Link>
                                                    <ul>
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
                                                </li>
                                                <li className="has-sub">
                                                    <Link to="/reviews">Recensioni</Link>
                                                </li>
                                                <li className="has-sub">
                                                    <Link to="/dentaltourism">Turismo Dentale</Link>
                                                    <ul>
                                                        <li>
                                                            <Link to="/dentaltourism">Turismo Dentale</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/get-quote">Come ricevere un preventivo</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className='has-sub'>
                                                    <Link to="/contact">Contattaci</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 text-right d-none d-lg-block mt-25 mb-25 text-right text-xl-right">
                                    <div className="login">
                                        <ul>
                                            <li>
                                                <div className="second-header-btn">
                                                    <Link to="/contact" className="btn">
                                                    Appuntamento
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
  <div className="mobile-menu mean-container">
    <div className="mean-bar">
      <Link to="#" onClick={() => setmobile(!mobile)} className={`meanmenu-reveal ${mobile && "meanclose"}`} style={{ right: "0px", left: "auto", textAlign: "center", textIndent: "0px", fontSize: "18px" }}>
        {mobile ? "X" : <span><span><span></span></span></span>}
      </Link>
      {mobile &&
        <nav className="mean-nav">
          <ul>
            <li className="has-sub">
              <Link to="/"> Casa </Link>
            </li>
            <li className='has-sub'>
              <Link to="/about">Chi siamo</Link>
            </li>
            <li className="has-sub">
              <Link to="/implantology">Servizi</Link>
              {Services &&
                <ul>
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
              }
              <Link className={`mean-expand ${mobile && "mean-clicked"}`} to="#" onClick={() => { setServices(!Services) }} >
                {Services ? "-" : "+"}
              </Link>
            </li>
            <li className="has-sub">
              <Link to="/reviews">Recensioni</Link>
            </li>
            <li className="has-sub">
              <Link to="/dentaltourism">Turismo Dentale</Link>
              {Blog && 
                <ul>
                  <li>
                    <Link to="/dentaltourism">Turismo Dentale</Link>
                  </li>
                  <li>
                    <Link to="/get-quote">Come ricevere un preventivo</Link>
                  </li>
                </ul> 
              }
              <Link className={`mean-expand ${Blog && "mean-clicked"}`} to="#" onClick={() => { setBlog(!Blog) }} >
                {Blog ? "-" : "+"}
              </Link>
            </li>
            <li className="mean-last">
              <Link to="/contact">Contattaci</Link>
            </li>
          </ul>
        </nav>
      }
    </div>
  </div>
</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Main