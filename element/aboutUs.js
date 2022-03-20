import { useState } from 'react';
import Link from 'next/link';

import ModalVideo from 'react-modal-video';

function AboutUs() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className='content-inner' id='about'>
        <div className='container'>
          <div className='row align-items-center'>
            <div
              className='col-lg-6 m-b30 wow fadeInLeft'
              data-wow-duration='2s'
              data-wow-delay='0.2s'
            >
              <div className='video-bx style-3'>
              <img src='images/about/img4.png' alt='' />

                {/* <img src='images/video/pic3.jpg' alt='' /> */}
                {/* <div className='video-btn'>
                  <a
                    href='#about'
                    className='popup-youtube'
                    onClick={() => setOpen(true)}
                  >
                    <i className='flaticon-play'></i>
                  </a>
                </div> */}

                {/* TODO: Add video ID here for landing page */}
                {/* {process.browser && (
                  <ModalVideo
                    channel='youtube'
                    autoplay
                    isOpen={isOpen}
                    videoId='UpolBSznWp0'
                    onClose={() => setOpen(false)}
                  />
                )} */}
              </div>
            </div>
            <div
              className='col-lg-6 m-b30 wow fadeInRight'
              data-wow-duration='2s'
              data-wow-delay='0.4s'
            >
              <div className='section-head style-1 mb-4'>
                <h6 className='sub-title bgl-primary m-b20 text-primary'>
                  About Us
                </h6>
                <h2 className='title'>
                  How We Can Help You Achieve Your Business Goal
                </h2>
              </div>
              <p>
              Wire Trade is Well growing marketing agency in Virginia United States over the trust of 100+ companies and build-up 180+ Brands worldwide we have expertise of Digital Marketing, Brand Building, eCommerce Business Development. Our Journey is started in 2018 as a service provider company now we are working as Product Bases business management too.
              </p>
              <p className='m-b30'>
              Our customer-oriented approach, dedication to meet deadlines, and high professional standards are what make our company one of the best in the industry.
              </p>
              {/* <img src='images/sign.png' alt='' /> */}
              <h4 className='m-b30'>CEO Muhammad Ali</h4>
              <Link href='/about-us-1'>
                <a className='btn btn-link d-inline-flex align-items-center'>
                  <i className='fa fa-angle-right m-r10'></i>Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
