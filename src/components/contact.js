import React from 'react';
import {Helmet} from 'react-helmet'


const Contact = () => {
	return (
		<section className="pt-120">
			<Helmet>
		        <title>Contact</title>
		        <meta name="description" content="Helmet application" />
		    </Helmet>
			<div className="contact-title">
				<h1 className="">Contact</h1>
			</div>
			<div className="contact-wrapper">
				<div className="contact-info">
					<ul className="list-unstyled ">
						<li className="list-unstyled d-flex">
							<img src="images/location.svg" alt="Location icon" className=""/>
							<p className="my-auto">1005 Greenbelt Road, Houston TX 50940 USA</p>
						</li>
						<li className="list-unstyled d-flex">
							<img src="images/call.svg" alt="Call icon" className=""/>
							<p className="my-auto">+234 80 234 5678 | +234 80 234 5678</p>
						</li>
						<li className="list-unstyled d-flex">
							<img src="images/email.svg" alt="Email icon" className=""/>
							<p className="my-auto">info@pa-etos.com</p>
						</li>
					</ul>
				</div>
				<div className="position-relative align">
					<img className="hide-mobile2 contact-img-mobile" src="images/contact-img.png" alt="contact"/>
					<img className="hide-desktop4 contact-img-desktop" src="images/contact-img-tab.png" alt="contact"/>
					<img className="hide-desktop3 contact-img-desktop" src="images/contact-img-desktop.png" alt="contact"/>
				    <div className="slide2 contact-img-background"></div>
				</div>
			</div>	
		</section>
	)
}

export default Contact