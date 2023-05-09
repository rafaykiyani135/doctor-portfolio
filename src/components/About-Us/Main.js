import React from 'react'
import Bredcm from '../Menhome/breadcrumb'
import Ourdr from '../Menhome/Ourdr'
import Readmore from './Readmore'
import Readmoretwo from './Readmoretwo'
import Gallery from './Gallery'
import Offers from '../Menhome/Offers'
import Security from './Security'
import 'react-floating-whatsapp-button/dist/index.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'

function Main() {
  return (
    <>

      <Bredcm
         subtitle="Chi siamo"
         title="Casa"
         subtitledown="Chi siamo"
       />
       <Readmore/>
       <Readmoretwo/>
       <Gallery/>
       <Offers/>
       <Security/>
      <Ourdr/>
      <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",paddingLeft:"50px"}}>
      <FloatingWhatsApp  autoOpenTimeout="0" size="50px" phone="+355 69 375 5065" message='' popupMessage="Salve signore, come possiamo aiutarla" position='left'/>
      </div>
    </>
  )
}

export default Main