import React from 'react';
import { Route, Routes} from 'react-router-dom';
import About from './Components/Page/About';
import ServiceDetails from './Components/Page/ServiceDetails';
import DentistDetails from './Components/Page/DentistDetails';
import Blog from './Components/Page/Blog';
import Contact from './Components/Page/Contact';
import Team from './Components/Page/Team';
import BlogDetails from './Components/Page/BlogDetails';
import Main from './Components/main';
import './App.css';
import Header from './Components/Header/Header';
import FooterOne from './Components/Footer/FooterOne';
import FooterData from './Components/Data/FooterData';

function App() {
  return (
    <div className="main-wrapper">
        <Header/>
        <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route path='/Page/About' element={<About/>} />
        <Route path='/Page/ServiceDetails' element={<ServiceDetails/>} />
        <Route path='/Page/DentistDetails' element={<DentistDetails/>} />
        <Route path='/Page/BlogDetails' element={<BlogDetails/>} />
        <Route path='/Page/Blog' element={<Blog/>} />
        <Route path='/Page/Team' element={<Team/>} />
        <Route path='/Page/Contact' element={<Contact/>} />
        </Routes>
        <FooterOne FooterData={FooterData} />
    </div>
  );
}

export default App;