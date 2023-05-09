import React from 'react'
import { Link } from 'react-router-dom'



function First() {
  return (
    <>
        <div className="col-lg-8">
            <div className="blog-details-wrap">
                <div className="details__content pb-30">
                <h2 className='heading-class'>
                How to get a quote
                </h2>
                <p>
                If you need dental treatment in our clinic we offer you complete and professional assistance for your dental problems. You can ask us for a no-obligation dental care quote to get an estimate of the costs. You will find a highly qualified staff and a dental care service that also includes other services. Included in the cost, in addition to the therapy, you will also receive a free stay for 2 people
                </p>
                <blockquote>
                    <div className="blog__btn">
                        <Link to="/contact" className="btn">
                            REQUEST A QUOTE WITHOUT COMMITMENT
                        </Link>
                    </div>
                </blockquote>
                <h2 className='heading-class'>
                Free Estimate
                </h2>
                <p>
                Free first check-up Once you have filled in the medical history form, performed a 3D CT scan (2-3 days are sufficient) you will receive a personalized treatment plan, a detailed estimate and, if you wish, you can start immediately. Advantages - Free transfer from the airport and assistance in Italian even if you decide not to accept the quote. - You will have a detailed estimate and the possibility of starting the intervention immediately. - Sending a dental overview. - If you have a dental overview and would like to receive a remote estimate, you can send it to our official contacts
                </p>
                </div>
            </div>
        </div>

    </>
  )
}

export default First