import Footer from '../layout/footer';
import Header from '../layout/header-3';
import { useState } from 'react';
import AllServices from '../element/all-services';
import Projects from '../element/projects';
import Link from 'next/link';
import Quote from '../element/quote';
import SubscribeNow from '../element/subscribe-now';

function Services1() {
  const [open, setOpen] = useState('p2');
  return (
    <>
      <Header />
      <div className='page-content bg-white'>
        {/* <!-- Banner  --> */}
        <div
          className='dlab-bnr-inr overlay-primary-dark'
          style={{ backgroundImage: 'url(images/banner/bnr1.jpg)' }}
        >
          <div className='container'>
            <div className='dlab-bnr-inr-entry'>
              <h1>Wall of Trust &#x1F49B;</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label='breadcrumb' className='breadcrumb-row'>
                <ul className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link href='/'>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    Services
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* Case Study PDF */}
        <Projects />

        {/* <!-- Newsletter --> */}

        <SubscribeNow />
        {/* <!-- Get A Quote --> */}
        <Quote />

        {/* <!-- Call To action --> */}
        <section
          style={{
            backgroundImage: 'url(images/background/bg5.jpg)',
            backgroundSize: 'cover',
          }}
        >
          <div className='container'>
            <div className='row action-box style-1 align-items-center'>
              <div
                className='col-xl-7 col-lg-8 col-md-8 wow fadeIn'
                data-wow-duration='2s'
                data-wow-delay='0.2s'
              >
                <div className='section-head style-1'>
                  <h6 className='sub-title bgl-primary m-b20 text-primary'>
                    More With Us
                  </h6>
                  <h2 className='title'>
                  Start Your Business Journey With Us
                  </h2>
                </div>
              </div>
              <div
                className='col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn'
                data-wow-duration='2s'
                data-wow-delay='0.4s'
              >
                <Link href='/contact-us-1'>
                  <a className='btn btn-link d-inline-flex align-items-center'>
                    <i className='fa fa-angle-right m-r10'></i>Join Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Services1;
