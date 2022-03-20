import { useEffect, useState } from "react";
import Link from 'next/link';
// import { WOW } from "wowjs";

function Service() {
  const [open, setOpen] = useState("p2");
  // useEffect(() => {
  //   const wow = new WOW({
  //     offset: 100,
  //     mobile: false,
  //     live: true,
  //   });

  //   wow.init();
  // }, []);
  return (
    <>
      <section
        className="content-inner-2 wow fadeInUp"
        style={{ backgroundImage: "url(images/background/bg1.png)" }}
      >
        <div className="container">
          <div className="section-head style-1 text-center">
            <h6 className="sub-title bgl-primary m-b20 text-primary">
              Services
            </h6>
            <h2 className="title">Provide Awesome Service To You</h2>
          </div>
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
                  <h4 className="dlab-title">Amazon FBA PL</h4>
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
                  <h4 className="dlab-title">eCommerce Dropshipping</h4>
                  <p>
                  Setup a stunning eCommerce store on Amazon, Shopify, eBay, Walmart, wooCommerce. Sell the most demanding products online – With Dropshipping or Private label Methods.
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
                  <h4 className="dlab-title">PPC Campaigns</h4>
                  <p>
                  Get more leads with PPC sponsored campaigns, create a profitable sales funnel with low CTR and High ROI, Start from low-budget campaigns.
                  </p>
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
                  <h4 className="dlab-title">Graphic Design</h4>
                  <p>
                  Create an attractive illustration and design for your brand or product Which converts a customer and generates more leads (Product photography, videography, vector ads, banners, etc. )
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
                  <h4 className="dlab-title">Product Researching</h4>
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
                  <h4 className="dlab-title">Company Formation & Tax Filling</h4>
                  <p>
                  Complete Market breakdown with product sales forecast finds a gap in market as per on customer demand.</p>
                </div>
              </div>
        </div>

        



          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
