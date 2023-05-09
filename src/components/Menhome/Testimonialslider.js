import React from 'react'
import TestimonialAvtOne from '../../assets/img/testimonial/testi_avatar.png'
import TestimonialAvtTwo from '../../assets/img/testimonial/testi_avatar_02.png'
import ReviewIconOne from '../../assets/img/testimonial/review-icon.png'
import TestimonialIconTwo from '../../assets/img/testimonial/qt-icon.png'
import Slider from "react-slick";


function Testimonialslider() {
    let satting = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
    }
  return (
    <>
        <section className="testimonial-area pb-115 p-relative fix" style={{ backgroundColor: "#f6f8fc"}} >
            <div className="container fitcontent">
                <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center mb-50 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h5>Testimonianza</h5>
                    <h2>Cosa dicono i nostri clienti</h2>
                    </div>
                </div>
                <div className="col-lg-12">
                    <Slider className="testimonial-active" {...satting}>
                        <div className="single-testimonial">
                            <div className="testi-author">
                            <img src={TestimonialAvtOne} alt="img" />
                            </div>
                            <div className="review mb-30">
                            <img src={ReviewIconOne} alt="img" />
                            </div>
                            <p>
                            “Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor
                            lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum
                            magna.we dedicate financial on services the teams serve all
                            Curabitur ac tortor ante. Sed quis dignissim”
                            </p>
                            <div className="ta-info">
                            <h6>Margie Dose</h6>
                            <span>Web Developer</span>
                            </div>
                            <div className="qt-img">
                            <img src={TestimonialIconTwo} alt="img" />
                            </div>
                        </div>
                        <div className="single-testimonial">
                            <div className="testi-author">
                            <img src={TestimonialAvtTwo} alt="img" />
                            </div>
                            <div className="review mb-30">
                            <img src={ReviewIconOne} alt="img" />
                            </div>
                            <p>
                            “Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor
                            lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum
                            magna.we dedicate financial on services the teams serve all
                            Curabitur ac tortor ante. Sed quis dignissim”
                            </p>
                            <div className="ta-info">
                            <h6>Jone Walker</h6>
                            <span>Web Designer</span>
                            </div>
                            <div className="qt-img">
                            <img src={TestimonialIconTwo} alt="img" />
                            </div>
                        </div>
                        <div className="single-testimonial">
                            <div className="testi-author">
                            <img src={TestimonialAvtTwo} alt="img" />
                            </div>
                            <div className="review mb-30">
                            <img src={ReviewIconOne} alt="img" />
                            </div>
                            <p>
                            “Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor
                            lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum
                            magna.we dedicate financial on services the teams serve all
                            Curabitur ac tortor ante. Sed quis dignissim”
                            </p>
                            <div className="ta-info">
                            <h6>Dose Robot</h6>
                            <span>Web Developer</span>
                            </div>
                            <div className="qt-img">
                            <img src={TestimonialIconTwo} alt="img" />
                            </div>
                        </div>
                        <div className="single-testimonial">
                            <div className="testi-author">
                            <img src={TestimonialAvtOne} alt="img" />
                            </div>
                            <div className="review mb-30">
                            <img src={ReviewIconOne} alt="img" />
                            </div>
                            <p>
                            “Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor
                            lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum
                            magna.we dedicate financial on services the teams serve all
                            Curabitur ac tortor ante. Sed quis dignissim”
                            </p>
                            <div className="ta-info">
                            <h6>Jone Walker</h6>
                            <span>Web Designer</span>
                            </div>
                            <div className="qt-img">
                            <img src={TestimonialIconTwo} alt="img" />
                            </div>
                        </div>
                        <div className="single-testimonial">
                            <div className="testi-author">
                            <img src={TestimonialAvtTwo} alt="img" />
                            </div>
                            <div className="review mb-30">
                            <img src={ReviewIconOne} alt="img" />
                            </div>
                            <p>
                            “Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor
                            lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum
                            magna.we dedicate financial on services the teams serve all
                            Curabitur ac tortor ante. Sed quis dignissim”
                            </p>
                            <div className="ta-info">
                            <h6>Margie Dose</h6>
                            <span>Web Developer</span>
                            </div>
                            <div className="qt-img">
                            <img src={TestimonialIconTwo} alt="img" />
                            </div>
                        </div>
                        <div className="single-testimonial">
                            <div className="testi-author">
                            <img src={TestimonialAvtOne} alt="img" />
                            </div>
                            <div className="review mb-30">
                            <img src={ReviewIconOne} alt="img" />
                            </div>
                            <p>
                            “Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor
                            lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum
                            magna.we dedicate financial on services the teams serve all
                            Curabitur ac tortor ante. Sed quis dignissim”
                            </p>
                            <div className="ta-info">
                            <h6>Jone Walker</h6>
                            <span>Web Designer</span>
                            </div>
                            <div className="qt-img">
                            <img src={TestimonialIconTwo} alt="img" />
                            </div>
                        </div>
                    </Slider>
                </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default Testimonialslider