import React from 'react'
import {Link} from 'react-router-dom'

const Jobs=({vacancy})=>{
	console.log(vacancy)
	const jobs =  vacancy.length ? (
		vacancy.map(vacancies=>{
			return (
				<div className="text-left" key={vacancies.id}>
					<h1 className="">{vacancies.jobTitle}</h1>
					<p>{vacancies.skillRequired}</p>
					<p>{vacancies.salary}</p>
				</div>
			)
		})
		) : (
			<div className="">
				<div className="slide-item">
					<img className="w-100 slide-img hide-desktop" src="images/cover-img1.png" alt="First slide"/>
					<img className="w-100 hide-mobile" src="images/mobile-cover-img1.png" alt="First slide"/>
					<div className="slide-caption text-left slide1">
				    	<h1>We're always hiring <br /><b><span><Link to ='/contact'>Contact us</Link></span></b></h1>
				  	</div>
				</div>
				
			</div>	
		)
	return (
		<section className="">
			<div className="pt-100">{jobs}</div>
		</section>
	)
}


export default Jobs