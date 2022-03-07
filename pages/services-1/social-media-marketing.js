import Footer from '../../layout/footer';
import Header from '../../layout/header-3';
import { useState } from 'react';
import AllServices from '../../element/all-services';
import Team from '../../element/team';
import Testimonial from '../../element/testimonial';
import Link from 'next/link';
import Quote from '../../element/quote';
import SubscribeNow from '../../element/subscribe-now';

function Services1() {
  const [open, setOpen] = useState('p2');
  return (
    <>
      <Header />
      <div className='page-content bg-white'>
        {/* <!-- Banner  --> */}
        <div
          className='dlab-bnr-inr overlay-primary-dark'
          style={{ backgroundImage: 'url(/images/banner/bnr1.jpg)' }}
        >
          <div className='container'>
            <div className='dlab-bnr-inr-entry'>
              <h1>Social Media Marketing</h1>
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

        {/* <!-- Services --> */}
        {/* <AllServices /> */}
        <section
        className="content-inner-2 wow fadeInUp"
        style={{ backgroundImage: "url(images/background/bg1.png)" }}
      >
        <div className="container">
         
          <div className="row">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div
                className={`${
                  open === "p1"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p1")}
              >
                <div className="icon-bx-md radius bg-yellow shadow-yellow">
					<Link href="#">
					  <a className="icon-cell">
						<i className="flaticon-office"></i>
					  </a>
					</Link>  
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Social Media Marketing</h4>
                  <p>
                  Bring Traffic from social media platforms Facebook, Instagram, TikTok. Generate organic leads with well-known influencers and sponsored ad campaigns.
                  </p>
                </div>
              </div>
       </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div
                className={`${
                  open === "p2"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p2")}
              >
                <div className="icon-bx-md radius bg-red shadow-red">
					<Link href="#">	
						<a className="icon-cell">
							<i className="flaticon-website"></i>
						</a>
					</Link>	
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Influnecer Marekting</h4>
                  <p>
                  Display the real picture of your product by well reputed Instagram and TikTok influencers, show the world how your product useful for your targeted audience.
                </p>
                </div>
              </div>
        </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div
                className={`${
                  open === "p3"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p3")}
              >
                <div className="icon-bx-md radius bg-green shadow-green">
					<Link href="">	
						<a className="icon-cell">
							<i className="flaticon-pie-charts"></i>
						</a>
					</Link>	
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Email Makreting</h4>
                  <p>
                  Cheapest and highly converting product marketing to get more leads with small budget best marketing strategies for start to the end of your business.                  </p>
                </div>
              </div>
            </div>

{/* NEW Item  */}

<div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div
                className={`${
                  open === "p4"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p4")}
              >
                <div className="icon-bx-md radius bg-orange shadow-orange">
					<Link href="#">	
						<a className="icon-cell">
							<i className="flaticon-office"></i>
						</a>
					</Link>	
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Display Advertising</h4>
                  <p>
                  Show your product with most attractive and converting graphic design, give the brand message to your site visitors.</p>
                </div>
              </div>
        </div>


        <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div
                className={`${
                  open === "p5"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p5")}
              >
                <div className="icon-bx-md radius bg-yellow shadow-yellow">
					<Link href="#">	
						<a className="icon-cell">
							<i className="flaticon-pie-charts"></i>
						</a>
					</Link>	
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Affiliate Marketing.</h4>
                  <p>
                  Grab audience from google ranked websites pay a small commission to affiliate and build more customer trust.                  </p>
                </div>
              </div>
        </div>


        <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div
                className={`${
                  open === "p6"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p6")}
              >
                <div className="icon-bx-md radius bg-green shadow-green">
					<Link href="#">	
						<a className="icon-cell">
							<i className="flaticon-website"></i>
						</a>
					</Link>	
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Listings</h4>
                  <p>
                  Control how your business looks on 50+ directories, websites and apps. Changing your hours? Do it once, and watch it update everywhere</p>
                </div>
              </div>
        </div>

        



          </div>
        </div>
      </section>

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
