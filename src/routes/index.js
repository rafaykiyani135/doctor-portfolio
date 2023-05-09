import React , {useEffect} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom';
import Header from '../components/Header/Main'
import Footer from '../components/Footer/Main'
import Home from '../components/Home/Main'
import About from '../components/About-Us/Main'
import Contact from '../components/Contact-Us/Main'
import Dentaltour from '../components/Blog/Main';
import Getquote from '../components/Blogdetails/Main'
import Service from '../components/Service/Main'
import Pricing from '../components/PagesMen/Pricing/Main';
import Faq from '../components/PagesMen/Faq/Main'
import Team from '../components/PagesMen/Team/Main'
import TeamDetails from '../components/PagesMen/TeamDetails/Main'
import Shop from '../components/PagesMen/Shop/Main'
import ShopDetails from '../components/PagesMen/ShopDetails/Main'
import Hometwo from '../components/HomeTwo/Main'
import HomeThree from '../components/HomeThree/Main'
import Implantology from "../components/ServisesecMen/Implantology";
import Crown from "../components/ServisesecMen/Crown";
import Endodontics from "../components/ServisesecMen/Endodontics"
import Periodontal from "../components/ServisesecMen/Periodontal"
import Align from "../components/ServisesecMen/Align";
import Veneer from "../components/ServisesecMen/Veneer";
import Review from "../components/ServisesecMen/Reviews";

function Index() {

  const location = useLocation();
  const path = location.pathname
  useEffect(() => {
    window.scroll(0, 0)
}, [path]);
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/reviews' element={<Review/>}/>
        <Route path='/dental-veneers' element={<Veneer/>}/>
        <Route path='/periodontal-diseases' element={<Periodontal/>}/>
        <Route path='/align-orthodontics' element={<Align/>}/>
        <Route path='/implantology' element={<Implantology/>}/>
        <Route path='/endodontics' element={<Endodontics/>}/>
        <Route path="/crown" element={<Crown/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={ <Contact/>} />
        <Route path="/dentaltourism" element={ <Dentaltour/>} />
        <Route path="/get-quote" element={ <Getquote/>} />
        <Route path="/service" element={ <Service/>} />
        <Route path="/pricing" element={ <Pricing/>} />
        <Route path="/faq" element={ <Faq/>} />
        <Route path="/team" element={ <Team/>} />
        <Route path="/teamdetails" element={ <TeamDetails/>} />
        <Route path="/shop" element={ <Shop/>} />
        <Route path="/Shopdetails" element={ <ShopDetails/>} />
        <Route path="/hometwo" element={ <Hometwo/>} />
        <Route path="/homethree" element={ <HomeThree/>} />

      </Routes>

      <Footer/>
    </>
  )
}

export default Index