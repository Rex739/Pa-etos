import React from 'react';

const AboutIntro = ({pageIntro}) =>{
	const AboutPageData = pageIntro.map(contents=>{
		return contents.id === 0 ? (
			<div className="m-auto first-container" key={contents.id}>
					<div className="wrapper m-auto description" >
						<h1 className="">{contents.H1}</h1>
						<p className="page-paragraph">{contents.P}</p>
					</div>
					<div className="about-img-wrapper">
						<img src="images/projects-img.png" alt="project" className="ml-auto  hide-desktop2 about-project-img"/>
					</div>
				</div>
			) : null
	})
	return (
		<div>{AboutPageData}</div>
	)
}

export default AboutIntro