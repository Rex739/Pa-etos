import React from 'react';

const Team = ({team}) => {
	const Team = team.map(contents=>{
		return contents.id === 5 ?(
			<div className="" key={contents.id}>
				<div className="img-wrapper firstchild">
					<img src={contents.image} alt="" className="team mx-auto"/>
					<div>
						<h3>{contents.name}</h3>
						<p>{contents.position}</p>
					</div>
				</div>
			</div>
			) 
		: contents.id >= 5  ? (
			<div className="m-auto" key={contents.id}>
				<div className="img-wrapper">
					<img src={contents.image} alt="" className="team mx-auto"/>
					<div>
						<h3>{contents.name}</h3>
						<p>{contents.position}</p>
					</div>
				</div>
			</div>
			) :  null
	});
	return (
		<div className="team-wrapper m-auto">{Team}</div>
	)
}

export default Team