import Link from 'next/link';
import Slider from 'react-slick';

function Slider1() {
  return (
    <>
      <div
        className='banner-one'
        style={{ backgroundImage: 'url(images/main-slider/slider1/pic2.png)' }}
      >
        <div className='container'>
          <div className='banner-inner'>
            <div className='img1'>
              <img src='images/main-slider/slider1/pic3.png' alt='' />
            </div>
            <div className='img2'>
              <img src='images/main-slider/slider1/pic4.png' alt='' />
            </div>
            <div className='row align-items-center'>
              <div className='col-md-6'>
                <div className='banner-content'>
                  <h6
                    data-wow-duration='1s'
                    data-wow-delay='0.5s'
                    className='wow fadeInUp sub-title text-primary'
                  >
                    We Build Brand’s
                  </h6>
                  <h1
                    data-wow-duration='1.2s'
                    data-wow-delay='1s'
                    className='wow fadeInUp '
                    
                  >
                    Machuu<span className='text-primary'>.com</span> eCommerce Agency in<span className='text-primary'> California</span>{' '}
                   
                  </h1>
                  <p
                    data-wow-duration='1.4s'
                    data-wow-delay='1.5s'
                    className='wow fadeInUp m-b30'
                  >
                    Machuu Marketing Agency in California to provide various service which create and help you to grow a business,
                    Make Your Company top standing in their niche.
                  </p>
                  <Link href='#newConsult'>
                    <a
                      className='wow fadeInUp btn btn-primary text-white shadow rounded-xl'
                      data-wow-delay='2s'
                      style={{
                        visibility: 'visible',
                        animationDelay: '2s',
                        animationName: 'fadeInUp',
                      }}
                    >
                      Get a Free Consultation
                    </a>
                  </Link>
                  <div className='mt-5 underline-btn'>
                    <Link href='/services-1/social-media-marketing'>
                      <a
                        className='wow fadeInUp btn text-black'
                        data-wow-delay='2s'
                        style={{
                          visibility: 'visible',
                          animationDelay: '2s',
                          animationName: 'fadeInUp',
                        }}
                      >
                        Social Media Marketing
                      </a>
                    </Link>
                    <Link href='/services-1/all-services'>
                      <a
                        className='wow fadeInUp btn text-black'
                        data-wow-delay='2s'
                        style={{
                          visibility: 'visible',
                          animationDelay: '2s',
                          animationName: 'fadeInUp',
                        }}
                      >
                        Company Brand Building
                      </a>
                    </Link>

                    <Link href='/services-1/ecommerce'>
                      <a
                        className='wow fadeInUp btn text-black'
                        data-wow-delay='2s'
                        style={{
                          visibility: 'visible',
                          animationDelay: '2s',
                          animationName: 'fadeInUp',
                        }}
                      >
                        eCommerce Development
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div
                  className='dz-media move-box wow fadeIn'
                  data-wow-duration='1.6s'
                  data-wow-delay='0.8s'
                >
                  {/* <img className='move-1' src='images/move/pic1.png' alt='' /> */}
                  <img className='move-2' src='images/move/pic2.png' alt='' />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider1;
