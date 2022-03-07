import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Spinner } from 'react-bootstrap';

export default function SubscribeNow() {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('Subscribe Now');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        'domain_name*Pentagon55',
        'template_ph9xkfk',
        form.current,
        'user_XvXxcWyrDma0wkxP56525'
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            setText('Subscribed!');
            setIsLoading(false);
          }
        },
        (error) => {
          setText('Error ocurred!');
          setIsLoading(false);
        }
      );
  };

  return (
    <section
      className='content-inner-3 bg-primary'
      style={{
        backgroundImage: 'url(images/background/bg13.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='container'>
        <div className='row align-items-center'>
          <div
            className='col-lg-4 col-md-6 wow fadeInLeft'
            data-wow-duration='2s'
            data-wow-delay='0.2s'
          >
            <div className='dlab-media m-b30'>
              <img src='/images/about/img9.png' className='move-2' alt='' />
            </div>
          </div>
          <div
            className='col-lg-8 col-md-6 wow fadeInRight'
            data-wow-duration='2s'
            data-wow-delay='0.4s'
          >
            <div className='section-head style-1 text-white'>
              <h6 className='sub-title bgl-light m-b20'>Newsletter</h6>
              <h2 className='title m-b30'>
              Subscribe To Our For Latest Update Of Marketing
              {' '}
              </h2>
              <p>
              Get in Touch with us and receive the latest updates, strategies about social media marketing and online product selling.
              </p>
            </div>
            <div className='dlab-subscribe style-2 max-w500'>
              <form className='dzSubscribe' onSubmit={sendEmail} ref={form}>
                <div className='dzSubscribeMsg'></div>
                <div className='form-group'>
                  <div className='input-group'>
                    <input
                      name='dzEmail'
                      required='required'
                      type='email'
                      className='form-control'
                      placeholder='Email Address'
                    />
                    <div className='input-group-addon'>
                      <button
                        name='submit'
                        value='Submit'
                        type='submit'
                        className='btn rounded-xl shadow btn-primary'
                      >
                        {isLoading ? (
                          <Spinner animation='border' size='sm' />
                        ) : (
                          text
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
