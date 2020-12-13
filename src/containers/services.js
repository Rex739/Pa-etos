import React from 'react';
import {Helmet} from "react-helmet";
import ServicesIntro from './../components/servicesData/introData'
import ServicesData from './../components/servicesData/mainData'


const Services = ({services}) =>{
	return (
		<section className="pt-120 pb-5">
			<Helmet>
		        <title>Services</title>
		        <meta name="description" content="Helmet application" />
		    </Helmet>
			<div className="page-title">
				<h1 className="">Services</h1>
			</div>	
			<ServicesIntro pageIntro = {services}/>
			<ServicesData data ={services} />
		</section>
	)
}


export default Services