import Carousel from "better-react-carousel";

import staffone from "../../assets/img/gallery/s1.jpg";
import stafftwo from "../../assets/img/gallery/s2.jpg";
import staffthree from "../../assets/img/gallery/s3.jpg";
import stafffour from "../../assets/img/gallery/s4.jpg";
import stafffive from "../../assets/img/gallery/s5.jpg";
import apartone from "../../assets/img/gallery/apart1.jpg";
import aparttwo from "../../assets/img/gallery/apart2.jpeg";
import apartthree from "../../assets/img/gallery/apart3.jpg";
import apartfour from "../../assets/img/gallery/apart4.jpg";
import apartfive from "../../assets/img/gallery/apart5.jpg";


function Gallery(){

    

    return(
        <div>
            <div className="container" style={{paddingBottom:"100px"}}>
                <div className="row justify-content-center text-center" style={{paddingBottom:"100px"}}>
                <div className="col-lg-12">
  <h2 style={{color:"#3660d9"}}>
    Personale e alloggio
  </h2>
</div>
</div>
<div className="row justify-content-center text-center">
<div className="col-lg-8 col-md-10 col-sm-12">
  <div className="responsive">
    <Carousel 
      cols={1} 
      rows={1} 
      gap={10} 
      loop 
      containerStyle={{width:"100%"}}
      autoplay={4000}
      >
      <Carousel.Item>
        <img className="d-block w-100" src={staffone} alt="staffimage" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={stafftwo} alt="staffimage"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={staffthree} alt="staffimage"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={stafffour} alt="staffimage"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={stafffive} alt="staffimage"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={apartone} alt="staffimage"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={aparttwo} alt="staffimage"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={apartthree} alt="staffimage"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={apartfour} alt="staffimage"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={apartfive} alt="staffimage"/>
      </Carousel.Item>
    </Carousel>
  </div>
</div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;