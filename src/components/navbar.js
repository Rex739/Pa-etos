import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';


class NavBar extends Component{
	state = {
		clicked: false
	}
	render(){

		const handleClick = () =>{
			this.setState({
				clicked: !this.state.clicked
			})
		}
		return(
			<header>
				<div className="navbar py-2">
					<li className={this.state.clicked ? 'd-none': 'd-block list-unstyled'}>
						<NavLink exact to="/"><img src="images/logo.svg" alt="company logo" className="logo mr-auto" id="logo"/></NavLink>
					</li>
					<div className="togglenavbar" onClick={handleClick}>
						<div className={this.state.clicked ? 'ln1 hamburger mt-5' : 'hamburger ln01'}></div>
						<div className={this.state.clicked ? 'ln2 hamburger' : 'hamburger ln02'}></div>
						<div className={this.state.clicked ? 'ln3 hamburger' : 'hamburger ln03'}></div>
					</div>
				</div>
				<nav className={this.state.clicked ? 'nav1': 'nav'}>
					<ul className="d-flex list-unstyled" onClick={handleClick}>
						<li className="list-unstyled">
							<NavLink exact to="/"><img src="images/logo.svg" alt="company logo" className="logo"/></NavLink>
						</li>
						<li><NavLink exact to="/">HOME</NavLink></li>
						<div></div>
						<li><NavLink to="/about">ABOUT</NavLink></li>
						<div></div>
						<li><NavLink to="/services">SERVICES</NavLink></li>
						<div></div>
						<li><NavLink to="/contact">CONTACT</NavLink></li>
						<div></div>
					</ul>
				</nav>
				<div className="desktop-nav">
					<nav className="topnav">
						<ul className="d-flex list-unstyled">
							<li className="my-auto">
								<NavLink exact to="/"><img src="images/logo.svg" alt="company logo" className="logo mr-auto "/><img src="images/companyname.svg" alt="company name" className="company-name mx-4"/></NavLink>
							</li>
							<li className="ml-auto"><NavLink exact to="/">HOME</NavLink></li>
							<li><NavLink to="/about">ABOUT</NavLink></li>
							<li><NavLink to="/services">SERVICES</NavLink></li>
							<li><NavLink to="/contact">CONTACT</NavLink></li>
						</ul>
					</nav>
				</div>
				
			</header>
		)
	}
	
}

export default withRouter(NavBar)