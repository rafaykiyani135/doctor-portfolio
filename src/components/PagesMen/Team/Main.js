import React from 'react'
import Breadcrumb from '../../Menhome/breadcrumb'
import Team from '../../Pages/Team'

function Main() {
  return (
    <>
           <Breadcrumb
                   subtitle="Squadra"
                   title="Casa"
                  subtitledown="Squadra"
             />

             <Team/>
            
    </>
  )
}

export default Main