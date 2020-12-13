import React from 'react';


const ServicesIntro = ({pageIntro}) =>{
	const AboutPageData = pageIntro.map(contents=>{
		return contents.id === 0 ? (
			<div className="m-auto wrapper" key={contents.id}>
					<div className="m-auto services-description">
						<h1 className="services-header w-lg-50 ">{contents.H1}</h1>
						<p className="page-paragraph">{contents.P}</p>
					</div>
				</div>
			) : null
	})
	return (
		<div>{AboutPageData}</div>
	)
}

export default ServicesIntro