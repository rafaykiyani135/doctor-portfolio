import React from 'react'
import Make from '../MenContact-Us/Make'
import Bredcm from '../Menhome/breadcrumb'
import Map from '../MenContact-Us/Map'
import 'react-floating-whatsapp-button/dist/index.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'

function Main() {
  return (
    <>
         <Bredcm
            subtitle="Contattaci"
            title="Casa"
            subtitledown="Contattaci"
          />
        <Make/>
        <Map/>
        <br/>
        <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",paddingLeft:"50px"}}>
      <FloatingWhatsApp autoOpenTimeout="0" size="50px" phone="+355 69 375 5065" message='' popupMessage="Salve signore, come possiamo aiutarla" position='left'/>
      </div>
    </>
  )
}

export default Main