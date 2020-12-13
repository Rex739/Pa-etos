import React from 'react';
import {Helmet} from 'react-helmet'

const Home = () => {
	return (
		<section className="pt-100">
			<Helmet>
		        <title>PA-ETOS</title>
		        <meta name="description" content="Helmet application" />
		    </Helmet>
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
			  <ol className="carousel-indicators d-flex justify-content-start">
			    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			  </ol>
			  <div className="carousel-inner">
			    <div className="carousel-item active slide-item">
			      <img className=" w-100 hide-desktop" src="images/cover-img1.png" alt="First slide"/>
			      <img className="w-100 hide-mobile" src="images/mobile-cover-img1.png" alt="First slide"/>
			      <div className="slide-caption  text-left slide1">
				    <h1>Unmatched excellence<br/><span>in</span><b><span>Construction</span></b></h1> 
				  </div>
			    </div>
			    <div className="carousel-item slide-item">
			      <img className=" w-100 hide-desktop" src="images/cover-img2.png" alt="Second slide"/>
			      <img className="w-100 hide-mobile" src="images/mobile-cover-img2.png" alt="First slide"/>
			      <div className="slide-caption  text-left slide2">
				    <h1>Building beyond<br/><b>Expectations</b></h1> 
				  </div>
			    </div>
			    <div className="carousel-item slide-item">
			      <img className=" w-100 hide-desktop" src="images/cover-img3.png" alt="Third slide"/>
			      <img className="w-100 hide-mobile" src="images/mobile-cover-img3.png" alt="First slide"/>
			      <div className="slide-caption text-left slide3">
				    <h1>Your trusted<br/><b>Building Partner</b></h1> 
				  </div>
			    </div>
			  </div>
			  
			</div>
		</section>
	)
}

export default Home