import React from 'react'
import First from '../Menblog/First'
import Second from '../Menblog/Second'
import Sideone from '../Menblog/Sideone'
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
            <div className="row">
              <div className="col-lg-8">
                  <First/>
                  <Second/>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4">
                <aside className="sidebar-widget">
                  <Sideone/>
                </aside>
              </div>
            </div>
          </div>
      </section>

    </>
  )
}

export default Main