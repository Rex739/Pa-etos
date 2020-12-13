import React from 'react';
import {Helmet} from "react-helmet";
import AboutIntroData from './../components/aboutData/AboutIntroData'
import AboutUs from './../components//aboutData/AboutUsData'
import Team from './../components/aboutData/team'

const About = ({about}) => {

	return (
		<section className="pt-120 pb-5">
			<Helmet>
		        <title>About Us</title>
		        <meta name="description" content="Helmet application" />
		    </Helmet>
			<div className="page-title">
				<h1 className="">About Us</h1>
			</div>
			<AboutIntroData pageIntro = {about} />
			<AboutUs pageData = {about} />
			<Team team = {about} />	
		</section>
	)
}

export default About
