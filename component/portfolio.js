// import Image1 from "images/projects/grid/pic1";
import Image from "next/image";
import { useEffect, useState } from "react";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 

function Portfolio() {
  const portfolio = [
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "branding"],
      imageSrc: "/images/projects/pic4.jpg",
      img: (
        <Image
          src="/images/projects/pic1.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Amazon FBA Sales and Product Viability",
      category: ["amazon_fba"],
      imageSrc: "/images/projects/pic7.png",
      img: (
        <Image
          src="/images/projects/pic7.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Amazon FBA Sales and Product Viability",
      category: ["shopify_store"],
      imageSrc: "/images/projects/pic11.jpg",
      img: (
        <Image
          src="/images/projects/pic11.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Amazon FBA Sales and Product Viability",
      category: ["amazon_fba", "shopify_store"],
      imageSrc: "/images/projects/pic12.jpg",
      img: (
        <Image
          src="/images/projects/pic12.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Amazon FBA Sales and Product Viability",
      category: ["amazon_fba", "shopify_store"],
      imageSrc: "/images/projects/pic13.png",
      img: (
        <Image
          src="/images/projects/pic13.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Amazon FBA Sales and Product Viability",
      category: ["all", "marketing"],
      imageSrc: "/images/projects/pic14.png",
      img: (
        <Image
          src="/images/projects/pic14.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Amazon FBA Sales and Product Viability",
      category: ["all", "marketing"],
      imageSrc: "/images/projects/pic15.png",
      img: (
        <Image
          src="/images/projects/pic15.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Amazon FBA Sales and Product Viability",
      category: ["all", "marketing"],
      imageSrc: "/images/projects/pic16.png",
      img: (
        <Image
          src="/images/projects/pic16.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Amazon FBA Sales and Product Viability",
      category: ["all", "amazon_fba"],
      imageSrc: "/images/projects/pic9.jpg",
      img: (
        <Image
          src="/images/projects/pic9.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_development", "branding"],
      imageSrc: "/images/projects/pic4.jpg",
      img: (
        <Image
          src="/images/projects/pic2.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["web_design", "seo"],
      imageSrc: "/images/projects/pic4.jpg",
      img: (
        <Image
          src="/images/projects/pic3.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["web_design", "branding"],
      imageSrc: "/images/projects/pic4.jpg",
      img: (
        <Image
          src="/images/projects/pic4.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["mobile_app", "seo"],
      imageSrc: "/images/projects/pic4.jpg",
      img: (
        <Image
          src="/images/projects/pic5.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["branding", "seo"],
      imageSrc: "/images/projects/pic4.jpg",
      img: (
        <Image
          src="/images/projects/pic6.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
  ];

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const { openLightbox } = useLightbox();

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
        <>
            <div className="site-filters style-1 clearfix center m-b40">
			
			
			
                <ul className="filters">
                  <li className={`btn ${filter === "all" ? "active" : ""}`}>
                    <a  active={"all"}  onClick={() => setFilter("all")}>
                      All
                    </a>
                  </li>
                  <li className={`btn ${filter === "amazon_fba" ? "active" : ""}`}>
                    <a
                      active={"amazon_fba"}
                      onClick={() => setFilter("amazon_fba")}
                    >
                      Amazon FBA
                    </a>
                  </li>
                  <li className={`btn ${filter === "shopify_store" ? "active" : ""}`}>
                    <a
                      active={"shopify_store"}
                      onClick={() => setFilter("shopify_store")}
                    >
                      Shopify Store
                    </a>
                  </li>
                  <li className={`btn ${filter === "branding" ? "active" : ""}`}>
                    <a
                      active={"branding"}
                      onClick={() => setFilter("branding")}
                    >
                      Branding
                    </a>
                  </li>
                  <li className={`btn ${filter === "marketing" ? "active" : ""}`}>
                    <a
                      active={"marketing"}
                      onClick={() => setFilter("marketing")}
                    >
                      Marketing
                    </a>
                  </li>
                  <li className={`btn ${filter === "seo" ? "active" : ""}`}>
                    <a active={"seo"} onClick={() => setFilter("seo")}>
                      SEO
                    </a>
</li>
                </ul>
				
				
				
            </div>
            <SimpleReactLightbox>
                <SRLWrapper >
                    <div className="clearfix">
                        <ul id="masonry" className="row" data-column-width="3">
                          {projects.map((item) =>
                            item.filtered === true ? (
                              <>
                                <li
                                  className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"
                                  data-wow-duration="2s"
                                  data-wow-delay="0.1s"
                                >
                                    <div className="dlab-box style-1 m-b30">
                                        <div className="dlab-media">
                                            <a href=""> {item.img}</a> 
                                        </div>
                                    </div>
                                </li>
                              </>
                            ) : (
                              ""
                            )
                          )}
                        </ul>
                    </div>
                </SRLWrapper >      
            </SimpleReactLightbox>  
        </>
  );
}

export default Portfolio;
