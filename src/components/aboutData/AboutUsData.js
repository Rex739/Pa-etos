import React from 'react';

const AboutUs = ({pageData}) => {
	const AboutContent = pageData.map(contents=>{
		return contents.different === true ? (
			<div className="m-auto" key={contents.id}>
				<div className="page-content background-grey">
					<h1 className="sub-heading mr-auto">{contents.header}</h1>
					<p className="page-paragraph wrapper mx-auto content">{contents.content}</p>
				</div>
			</div>
			) 
		: contents.id >0 && contents.id < 5 ? (
			<div className="m-auto" key={contents.id}>
				<div className="page-content">
					<h1 className="sub-heading mr-auto">{contents.header}</h1>
					<p className="page-paragraph wrapper mx-auto content">{contents.content}</p>
				</div>
			</div>
			) :  null
	})
	return (
		<div>{AboutContent}</div>
	)
}

export default AboutUs