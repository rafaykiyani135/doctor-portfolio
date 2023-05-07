import React from 'react'
import Bredcm from '../Menhome/breadcrumb'
import Appointment from '../Menhome/Appointment'
import Ourdr from '../Menhome/Ourdr'
import Readmore from './Readmore'
import Readmore_two from './Readmore_two'
import Gallery from './Gallery'
import Offers from '../Menhome/Offers'
import Security from './Security'
function Main() {
  return (
    <>

      <Bredcm
         subtitle="Chi siamo"
         title="Casa"
         subtitledown="Chi siamo"
       />
       <Readmore/>
       <Readmore_two/>
       <Gallery/>
       <Offers/>
       <Security/>
      <Ourdr/>
    </>
  )
}

export default Main