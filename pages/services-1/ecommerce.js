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
              <h1>Amazon FBA PL</h1>
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
                  <h4 className="dlab-title">Product Hunting & Sourcing</h4>
                  <p>
                  Unique product researching method to find a winning product according to investment and category. Source product on targeted margins from Alibaba, 1688, and in-ground sourcing agent in china.                  </p>
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
                  <h4 className="dlab-title">Listing Optimization</h4>
                  <p>
                  Optimized amazon product listing by in-depth keyword research and content writing techniques. Most highly optimized content converts traffic into sales.                  </p>
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
                  <h4 className="dlab-title">Amazon PPC</h4>
                  <p>
                  Get more leads with Amazon sponsored campaigns, create a profitable sales funnel with low CTR and High ROI, Start from low-budget campaigns.                  </p>
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
                  <h4 className="dlab-title">Market Evaluation & Breakdown</h4>
                  <p>
                  Complete Market breakdown with product sales forecast finds a gap in the market as per on customer demand.
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
                  Once the product is hunted before jumping in the market find the USP (Unique Selling Proposition) by complete market analysis and customer demand which brings the product to another level.
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
                  <h4 className="dlab-title">Customer Support</h4>
                  <p>
                  Providing customer support on amazon seller central. Resolve customer issues answer the question to the customer on time Fastest Response time.</p>
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
