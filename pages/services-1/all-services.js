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
              <h1>All Services</h1>
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
                  <h4 className="dlab-title">Ads Graphics</h4>
                  <p>
                  Create highly optimized product ad graphic design to get customer attraction and convert the click into sales.                  </p>
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
                  <h4 className="dlab-title">Content Writing</h4>
                  <p>
                  Write best Copywriting describing a product to the customer by highlighting the pain point and making a reason why a customer should purchase the product. </p>       
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
                  <h4 className="dlab-title">Branding</h4>
                  <p>

                  Show the product under famous brands to get customer trust, branded products have more selling potential to sell.                  </p>
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
                  <h4 className="dlab-title">Product Photo and Videography</h4>
                  <p>
                  Give the feel to the customer how this product work. Make stunning product shoots and videography to increase sales velocity.</p>
                </div>
              </div>
        </div>


        {/* <div
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
                  <h4 className="dlab-title">Product Development</h4>
                  <p>
                  Hunt a winning product for all markets create market segmentation to find the best selling product add value in product as per the needs of customers including product sourcing with high-profit.</p>
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
                  <h4 className="dlab-title">Market Evaluation</h4>
                  <p>
                  Complete Market breakdown with product sales forecast finds a gap in market as per on customer demand.</p>
                </div>
              </div>
        </div> */}

        



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
