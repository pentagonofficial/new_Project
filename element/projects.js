import Slider from "react-slick";

function TeamSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    arrows: false,
    speed: 5000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1	,
          infinite: true,
          dots: true,
        },
      },
	  {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider
        {...settings}
        className=" m-5 team-carousel1 owl owl-carousel owl-none owl-theme owl-dots-primary-full"
      >
     
        
      
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.4s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
                <img src="images/team/pic1.png" alt="" />
            </div>
        
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.5s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
             
                <img src="images/team/pic2.png" alt="" />
              
            </div>
          
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              
                <img src="images/team/pic3.png" alt="" />
              
            </div>
            </div>

        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.7s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
             
                <img src="images/team/pic4.png" alt="" />
              
            </div>
           
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.8s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              
                <img src="images/team/pic5.png" alt="" />
              
            </div>
           
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.9s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              
                <img src="images/team/pic6.png" alt="" />
             
            </div>
            
          </div>
        </div>

        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.9s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              
                <img src="images/team/pic7.png" alt="" />
             
            </div>
            
          </div>
        </div>


        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.9s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              
                <img src="images/team/pic8.png" alt="" />
             
            </div>
            
          </div>
        </div>


      </Slider>
    </>
  );
}

export default TeamSlider;
