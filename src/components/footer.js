import React from 'react';
// import {Link, withRouter} from 'react-router-dom';

const Footer = () => {
	return(
		<footer className="foot">
			<ul className="footer-wrap d-lg-flex">
				<li className="list-unstyled hide-mobile">
					<img src="images/mobile-companyname.svg" alt="company name" className="company-name"/>
				</li>
				<li className="list-unstyled hide-desktop2">&copy; 2020 PA-ETOS | All Rights Reserved</li>
				<ul className="list-unstyled d-lg-flex ml-auto">
					<li className="list-unstyled d-md-flex">
					<img src="images/location-icon.svg" alt="Location icon" className="mr-2 hide-desktop" width="15"/>
						<p className="my-auto">1005 Greenbelt Road, Houston TX 50940 USA</p>
					</li>
					<li className="list-unstyled d-md-flex">
						<img src="images/call-icon.svg" alt="Call icon" className="mr-2 hide-desktop" width="15"/>
						<p className="my-auto">+234 80 234 5678 | +234 80 234 5678</p>
					</li>
					<li className="list-unstyled d-md-flex">
						<img src="images/email-icon.svg" alt="Email icon" className="my-auto mr-2 hide-desktop" width="15"/>
						<p className="my-auto">info@pa-etos.com</p>
					</li>
					<li className="list-unstyled hide-mobile2">&copy; 2020 PA-ETOS | All Rights Reserved</li>
				</ul>		
			</ul>
		</footer>
	)	
}
export default Footer;