import Link from 'next/link';
import { useState } from 'react';
function Header() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState('home');
  return (
    <>
      {/* <!-- Header --> */}
      <header
        className='site-header header-transparent text-black mo-left'
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
                    <img src='images/logo.png' alt='' />
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
                    <a className='btn btn-link d-inline-flex align-items-center'>
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
                        <Link href='/services-1/ecommerce'>
                        <a><b style={{fontSize:"14px"}}>Amazon FBA PL</b> <p style={{fontSize:"12px"}}>Build your asset online from high Demand product to profitability</p></a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/services-1/social-media-marketing'>
                        <a><b style={{fontSize:"14px"}}>Advertising</b> <p style={{fontSize:"12px"}}>Scoial media sponsored campaigns - Google ads - PPC Expert</p></a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/services-1/company-formation'>
                          <a><b style={{fontSize:"14px"}}>Company Formation & Accounting</b> <p style={{fontSize:"12px"}}> Will helps you file your U.S/UK company</p></a>
                         
                        </Link>
                      </li>
                      <li>
                        <Link href='/services-1/seo'>
                        <a><b style={{fontSize:"14px"}}>Dropishping Store</b> <p style={{fontSize:"12px"}}>Amazon - eBay - Shopify Dropshipping Store to make unlimited profitability</p></a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/services-1/shopify'>
                        <a><b style={{fontSize:"14px"}}>Wholese Business Online</b> <p style={{fontSize:"12px"}}>Approved top Selling Brand - Be a profitable Wholesaler in 60 days</p></a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/services-1/all-services'>
                        <a><b style={{fontSize:"14px"}}>More Services</b> <p style={{fontSize:"12px"}}>Copywriting - Graphich Design - Brand Building - Shopify Store and more.</p></a>
                        </Link>
                      </li>
                      
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
                      <a>Wall of Trust &#x1F49B;</a>
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

export default Header;
