import React from 'react'

const Vacancies=({vacancy})=>{
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
					<img className="d-block w-100 slide-img" src="images/cover-img1.png" alt="First slide"/>
					<div class="slide-caption text-left slide1">
				    	<h2>There are currently no<br /> vacancies.<br /><span>Please check back later.</span></h2>
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


export default Vacancies





