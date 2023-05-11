import React from 'react'
import First from '../Menblog/First'
import Second from '../Menblog/Second'
// import Search from '../Menblog/Search'
import Bredcm from '../Menhome/breadcrumb'


function Main() {
  return (
    <>
      <Bredcm
          subtitle="Turismo Dentale"
          title="Casa"
          subtitledown="Turismo Dentale" 
        />
        
      <section className="inner-blog pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                  <First/>
                  <Second/>
              </div>
            </div>
          </div>
      </section>

    </>
  )
}

export default Main