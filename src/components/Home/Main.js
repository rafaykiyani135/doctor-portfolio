import React from 'react'
import Slider from '../Slider/Main'
import Ourservish from '../Menhome/Ourservices'
import ChooseUs from '../Menhome/Chooseus'
import OurDr from '../Menhome/Ourdr'
import Appointment from '../Menhome/Appointment'
import Offers from '../Menhome/Offers'
import 'react-floating-whatsapp-button/dist/index.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'

function Main() {
  return (
    <>
      <Slider/>
      <Ourservish/>
      <ChooseUs/>
      <OurDr/>
      <Appointment/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Offers/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",paddingLeft:"50px"}}>
      <FloatingWhatsApp autoOpenTimeout="0" size="50px" phone="+355 69 375 5065" message='' popupMessage="Salve signore, come possiamo aiutarla" position='left'/>
      </div>
    </>
  )
}

export default Main