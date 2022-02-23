import Link from 'next/link';
import { useState } from 'react';
function Header3() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState('home');
  return (
    <>
      {/* <!-- Header --> */}
      <header
        className='site-header header-transparent mo-left'
        id='fix-header'
      >
        {/* <!-- Main Header --> */}
        <div className='sticky-header main-bar-wraper navbar-expand-lg'>
          <div className='main-bar clearfix '>
            <div className='container clearfix'>
              {/* <!-- Website Logo --> */}
              <div className='logo-header mostion logo-dark'>
                <Link href='/'>
                  <a>
                    <img
                      className='custom-logo-white'
                      src='/images/logo-white.png'
                      alt=''
                    />
                    <img className='custom-logo' src='images/logo.png' alt='' />
                  </a>
                </Link>
              </div>
              {/* <!-- Nav Toggle Button --> */}
              <button
                className={`navbar-toggler collapsed navicon justify-content-end ${
                  show ? 'open' : ''
                }`}
                onClick={() => setShow(!show)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              {/* <!-- Extra Nav --> */}
              <div className='extra-nav'>
                <div className='extra-cell'>
                  <Link href='/contact-us-1'>
                    <a className='btn btn-corner gradient btn-primary'>
                      <i className='fa fa-angle-right m-r10'></i>Contact Us
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className={`header-nav navbar-collapse collapse justify-content-end ${
                  show ? 'show' : ''
                }`}
                id='navbarNavDropdown'
              >
                <div className='logo-header'>
                  <Link href='/'>
                    <a>
                      <img src='images/logo.png' alt='' />
                    </a>
                  </Link>
                </div>
                <ul className='nav navbar-nav navbar'>
                  <li>
                    <Link href='/'>
                      <a>Home</a>
                    </Link>
                  </li>

                  <li className={`${open === 'services' ? 'open' : ''}`}>
                    <a onClick={() => setOpen('services')}>
                      <span>Services</span>
                      <i className='fa fa-chevron-down'></i>
                    </a>
                    <ul className='sub-menu'>
                      <li>
                        <Link href='/services-1/web-and-app-design'>
                          <a><b style={{fontSize:"16px"}}>Web & App Design</b> <p style={{fontSize:"11px"}}> Deliver your business to wider audience</p></a>
                         
                        </Link>
                      </li>
                  
                      <li>
                        <Link href='/services-1/ecommerce'>
                        <a><b style={{fontSize:"17px"}}>eCommerce</b> <p style={{fontSize:"12px"}}> Sell your product online -Amazon -Shopify and more</p></a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/services-1/social-media-marketing'>
                        <a><b style={{fontSize:"17px"}}>Digital Marketing</b> <p style={{fontSize:"12px"}}>Scoial media sponsored campaigns and influencer marketing</p></a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/services-1/seo'>
                        <a><b style={{fontSize:"17px"}}>Search Engine Optimization</b> <p style={{fontSize:"12px"}}>improving the ranking of a website in search engine listings</p></a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/services-1/all-services'>
                        <a><b style={{fontSize:"17px"}}>More Services</b> <p style={{fontSize:"12px"}}>Copywriting - Graphich Design - Brand Building and more.</p></a>
                        </Link>
                      </li>
                      {/* <li> =============
                        <Link href='/services-1/shopify'>
                          <a>Shopify Dropshipping Store</a>
                        </Link>
                      </li> */}
                      {/* <li> ===============
                        <Link href='/services-1/shopify'>
                          <a>Amazon FBA & FBM</a>
                        </Link>
                      </li> */}
                      
                      {/* <li> ===============
                        <Link href='/services-1/copy-writing'>
                          <a>Copy Writing</a>
                        </Link>
                      </li> */}
                      {/* <li> ================
                        <Link href='/services-1/ppc'>
                          <a>PPC</a>
                        </Link>
                      </li> */}
                      {/* <li> =================
                        <Link href='/services-1/brand-building'>
                          <a>Brand Building</a>
                        </Link>
                      </li> */}
                      {/* <li> ====================
                        <Link href='/services-1/graphic-design'>
                          <a>Graphic Design</a>
                        </Link>
                      </li> */}
                    </ul>
                  </li>
                  <li>
                    <Link href='/case-studies'>
                      <a>Case Studies</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/about-us-1'>
                      <a>About Us</a>
                    </Link>
                  </li>
                </ul>
                <div className='dlab-social-icon'>
                  <ul>
                    <Link href='https://en-gb.facebook.com/'>
                      <a className='fa fa-facebook'></a>
                    </Link>
                    <Link href='https://twitter.com/login?lang=en'>
                      <a className='fa fa-twitter'></a>
                    </Link>
                    <Link href='https://www.linkedin.com/login'>
                      <a className='fa fa-linkedin'></a>
                    </Link>
                    <Link href='https://www.instagram.com/'>
                      <a className='fa fa-instagram'></a>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Main Header End --> */}
      </header>
      {/* <!-- Header End --> */}
    </>
  );
}

export default Header3;
