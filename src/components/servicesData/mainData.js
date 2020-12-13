import React from 'react';
// react slick slider
import Slider from 'react-slick';

const ServicesData = ({data}) => {
	let settings = {
	    dots: false,
	    infinite: true,
	    speed: 100,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    responsive: [
          {
            // screens less than >= 768px
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              dots: false,
            }
          }
      	]
	  };

	const mainData =  data.map(contents=>{
		return contents.id === 1 ? (
			<div className="m-auto pb-3" key={contents.id}>
				<div className="page-content">
					<h1 className="sub-heading services-sub-heading mr-auto">{contents.header}</h1>
				</div>
			</div>
			) : contents.id > 1 && contents.id < 8 ? (
			<div className="mt-1" key={contents.id}>
				<li className="page-paragraph services-list wrapper mx-auto">{contents.servicesList}</li>
			</div>
			) : contents.id === 8 ? (
			<div className="m-auto py-3" key={contents.id}>
				<div className="page-content">
					<h1 className="sub-heading services-sub-heading mr-auto">{contents.header}</h1>
				</div>
				<div className="wrapper m-auto slide-wrap">
					<Slider {...settings}>
						<div className="contain">
							<div className="slide-container position-relative">
						    	<img src="images/projects-1.png" alt="projects" className=" slides"/>
							    <p className="project-title1 slide2">Construction of<br />  Onne Flyover Bridge</p>
							    <p className="project-title2">Construction of<br /> Onne Flyover Bridge</p>
						    </div>
						</div>
					    <div className="contain">
							<div className="slide-container position-relative">
						    	<img src="images/projects-1.png" alt="projects" className=" slides"/>
							    <p className="project-title1 slide2">Construction of<br /> Onne Flyover Bridge</p>
							    <p className="project-title2">Construction of<br />  Onne Flyover Bridge</p>
						    </div>
						</div>
					    <div className="contain">
							<div className="slide-container position-relative">
						    	<img src="images/projects-1.png" alt="projects" className=" slides"/>
							    <p className="project-title1 slide2">Construction of<br />  Onne Flyover Bridge</p>
							    <p className="project-title2">Construction of<br />  Onne Flyover Bridge</p>
						    </div>
						</div>
					    <div className="contain">
							<div className="slide-container position-relative">
						    	<img src="images/projects-1.png" alt="projects" className=" slides"/>
							    <p className="project-title1 slide2">Construction of<br />  Onne Flyover Bridge</p>
							    <p className="project-title2">Construction of<br />  Onne Flyover Bridge</p>
						    </div>
						</div>
					</Slider>
				</div>
				
			</div>
			) : ( null )
	})
	return(
		<div>{mainData}</div>
	)	
}

export default ServicesData
