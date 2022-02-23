import { useEffect } from 'react';
import Slider1 from '../element/slider-1';
import Clients from '../element/clients';
import Service from '../element/service';
import AboutUs from '../element/aboutUs';
import Counter from '../element/counter';
import Features from '../element/our-features';
import Projects from '../element/projects';
import Newsletter from '../element/newsletter';
import Team from '../element/team';
import Testimonial from '../element/testimonial';
import Quote from '../element/quote';
import Cta from '../element/cta';
import Footer from '../layout/footer';
import Header from '../layout/header';
import { Spinner } from 'react-bootstrap';
import SubscribeNow from '../element/subscribe-now';

function Calendly() {
  return (
    <>
      <>
       0
      </>
     0
    </>
  );
}

function InitialLoading() {
  return (
    <div className='parent-div'>
      <div className='child-div'>
        <Spinner animation='border' />
      </div>
    </div>
  );
}

function Home() {
  useEffect(() => {
    document.querySelector('body').setAttribute('color', 'color_1');
  }, []);
  return (
    <>
      <Header />
      <div className='page-content bg-white' id='top'>
        <Slider1 />
        <Clients />
        <Counter />
        <Service />
        <AboutUs />
        <Features />
        <Projects />
        <SubscribeNow />
        <Team />
        <Testimonial />
        <Calendly />
        <Quote />
        <Cta />
        {/*
         */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
