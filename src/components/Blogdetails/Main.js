import React from 'react'
import Breadcrumb from '../Menhome/breadcrumb'
import First from '../Blogdetailsmen/First'
import Sideone from '../Menblog/Sideone'

function Main() {
  return (
    <>
        <Breadcrumb
            subtitle="Come ottenere un preventivo"
            title="Casa"
            subtitledown="Come ottenere un preventivo"
        />

        <section className="inner-blog b-details-p pt-120 pb-120">
             <div className="container"> 
                <div className="row justify-content-center">
                   <First/>
                </div>
             </div>
        </section>
    </>
  )
}

export default Main