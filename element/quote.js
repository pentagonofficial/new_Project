import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Spinner } from 'react-bootstrap';

function Quote() {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('Submit Now');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        'domain_name*Pentagon55',
        'template_68vdpqq',
        form.current,
        'user_XvXxcWyrDma0wkxP56525'
      )
      .then(
        (result) => {
          setText('Email Sent!');
          setIsLoading(false);
        },
        (error) => {
          setText('Error ocurred!');
          setIsLoading(false);
        }
      );
  };

  return (
    <>
      <section id="newConsult"
        className='content-inner'
        style={{ backgroundImage: 'url(images/background/bg1.png)' }}
        
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div
              className='col-xl-6 col-lg-7 m-b30 wow fadeInLeft'
              data-wow-duration='2s'
              data-wow-delay='0.2s'
            >
              <div className='section-head style-1'>
                <h6 className='sub-title bgl-primary m-b20 text-primary'>
                  Contact Us
                </h6>
                <h2 className='title' id='newConsult'>
                  
                  Contact Us or Get a Free Consultation
                </h2>
              </div>
              <form
                name='contact'
                className='dlab-form dzForm'
                ref={form}
                onSubmit={sendEmail}
              >
                <div className='dzFormMsg'></div>
                <input
                  type='hidden'
                  className='form-control'
                  name='dzToDo'
                  value='Contact'
                />
                <div className='row'>
                  <div className='col-sm-12'>
                    <div className='input-group'>
                      <div className='input-group-prepend'>
                        <span className='input-group-text'>
                          <i className='la la-user'></i>
                        </span>
                      </div>
                      <input
                        name='dzName'
                        type='text'
                        required='required'
                        className='form-control'
                        placeholder='Full Name'
                      />
                    </div>
                  </div>

                  <div className='col-sm-12'>
                    <div className='input-group'>
                      <div className='input-group-prepend'>
                        <span className='input-group-text'>
                          <i className='la la-envelope'></i>
                        </span>
                      </div>
                      <input
                        name='dzEmail'
                        type='email'
                        required
                        className='form-control'
                        placeholder='Email Address'
                      />
                    </div>
                  </div>

                  <div className='col-sm-12'>
                    <div className='input-group'>
                      <div className='input-group-prepend'>
                        <span className='input-group-text'>
                          <i className='la la-file-alt'></i>
                        </span>
                      </div>
                      <input
                        name='project_title'
                        type='text'
                        className='form-control'
                        required
                        placeholder='Project Title'
                      />
                    </div>
                  </div>

                  <div className='col-sm-12'>
                    <div className='input-group'>
                      <div className='input-group-prepend'>
                        <span className='input-group-text'>
                          <i className='la la-sms'></i>
                        </span>
                      </div>
                      <textarea
                        name='dzMessage'
                        className='form-control'
                        placeholder='Message'
                      ></textarea>
                    </div>
                  </div>
                  <div className='col-sm-12'>
                    <div className='input-group'>
                      <div
                        className='g-recaptcha'
                        data-sitekey='6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN'
                        data-callback='verifyRecaptchaCallback'
                        data-expired-callback='expiredRecaptchaCallback'
                      ></div>
                      <input
                        className='form-control d-none'
                        style={{ display: 'none' }}
                        data-recaptcha='true'
                        data-error='Please complete the Captcha'
                      />
                    </div>
                  </div>

                  <div className='col-sm-12 mt-2'>
                    <button
                      name='submit'
                      type='submit'
                      value='Submit'
                      className='btn btn-link d-inline-flex align-items-center'
                    >
                      <i className='fa fa-angle-right m-r10'></i>
                      {isLoading ? (
                        <Spinner animation='border' size='sm' />
                      ) : (
                        text
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className='col-xl-6 col-lg-5 m-b30 wow fadeInRight'
              data-wow-duration='2s'
              data-wow-delay='0.4s'
            >
              <div className='dlab-media cf-r-img'>
                <img src='/images/about/img2.png' className='move-1' alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Quote;
