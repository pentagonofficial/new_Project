import Link from 'next/link';

function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
    <footer className="site-footer style-1" id="footer" style={{"backgroundImage":"url(images/background/bg10.png)"}}>
		<div className="footer-top">
            <div className="container">
				<div className="footer-info wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
					<div className="row align-items-center">
						<div className="col-xl-6 col-md-4">
							<div className="footer-logo">
								<a href="/"><img src="images/logo-white.png" alt=""/></a> 
							</div>
						</div>
						<div className="col-xl-3 col-md-4 col-sm-6">
							<div className="icon-bx-wraper left m-b10">
								<div className="icon-lg"> 
									<Link href="#">
										<a className="icon-cell">
											<i className="flaticon-email"></i>
										</a> 
									</Link>	
								</div>
								<div className="icon-content">
									<p>+92 313 8654020,<br/>+44 786 8692172<br/>hello@machuu.com</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-4 col-sm-6">
							<div className="icon-bx-wraper left m-b10">
								<div className="icon-lg"> 
									<Link href="#">
										<a className="icon-cell">
											<i className="flaticon-location"></i>
										</a>
									</Link>	
								</div>
								<div className="icon-content">
									<p>Faisalabad 38000, Pakistan.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-4 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="widget widget_about">
							<h5 className="footer-title">About Us</h5>
							<p>Machuu is Well growing marketing agency in Virginia United States over the trust of 100+ companies and build-up 180+ Brands worldwide we have expertise of Digital Marketing, Brand Building, eCommerce Business Development.</p>
							<div className="dlab-social-icon">
								<ul>
									<li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
									<li><a className="fa fa-instagram" href="https://www.instagram.com/"></a></li>
									<li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
								</ul>
							</div>
						</div>
                    </div>
					<div className="col-xl-4 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="widget widget_services">
							<h5 className="footer-title">Our links</h5>
							<ul>
								<li><Link href="#"><a>Home</a></Link></li>
								<li><Link href="/case-studies"><a>Wall of Trust &#x1F49B;</a></Link></li>
								<li><Link href="/about-us-1"><a>About Us</a></Link></li>
								<li><Link href="/contact-us-1"><a>Contact Us</a></Link></li>
								{/* <li><Link href="#"><a>Blog</a></Link></li> */}
							</ul>
						</div>
                    </div>
					<div className="col-xl-4 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="widget widget_services">
							<h5 className="footer-title">Our Services</h5>
							<ul>
								<li><Link href="/services-1/web-and-app-design"><a>Amazon FBA PL</a></Link></li>
								<li><Link href="/services-1/ecommerce"><a>Advertising</a></Link></li>
								<li><Link href="/services-1/social-media-marketing"><a>Company Formation & Accounting</a></Link></li>
								<li><Link href="/services-1/seo"><a>Dropshipping Store</a></Link></li>
								<li><Link href="/services-1/all-services"><a>More Services</a></Link></li>
							</ul>
						</div>
                    </div>
					{/* <div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="widget widget_services">
						   <h5 className="footer-title">Other links</h5>
						   <ul>
								<li><Link href="#"><a>FAQ</a></Link></li>
								<li><Link href="#"><a>Portfolio</a></Link></li>
								<li><Link href="#"><a>Privacy Policy</a></Link></li>
								<li><Link href="#"><a>Terms & Conditions</a></Link></li>
								<li><Link href="#"><a>Support </a></Link></li>
							</ul>
						</div>
                    </div> */}
                </div>
            </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center"> 
						<span className="copyright-text">Copyright © 2022 <a href="https://Machuu.com/" target="_blank">Machuu</a>. All rights reserved.</span> 
					</div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer;