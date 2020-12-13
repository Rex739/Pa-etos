import React, {Component}  from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
// components
import NavBar from './components/navbar';
import Home from './components/home';
import About from './containers/about';
import Services from './containers/services';
import Contact from './components/contact';
import Footer from './components/footer';
import Post from './components/post';
import Vacancies from './components/vacancies'
// css
// bootstrap
import './containers/css/bootstrap.min.css';
import './containers/css/bootstrap-grid.min.css';
// animate
import './containers/css/animate.css';
// react slick slider 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// local css
import './containers/css/main.css';
import './containers/css/headfoot.css';
class App extends Component{
	state={
		About : [
			{
				H1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
				P: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				id: 0
			},
			{
				header: "History",
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
				id: 1
			},
			{
				header: "Vision",			
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
				id: 2,
				different: true
			},
			{
				header: "Mission", 
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
				id: 3
			},
			{
				header: "Leadership",
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
				id: 4,
				different: true
			},
			{
				name: 'Chief Pius Etokhana',
				position: 'Executive Chairman',
				image: 'images/team-img1.png',
				id: 5
			},
			{
				name: 'Michael Doziea',
				position: 'MD/CEO',
				image: 'images/team-img2.png',
				id: 6
			},
			{
				name: 'Samuel Chukwu',
				position: 'Lead Architect',
				image: 'images/team-img3.png',
				id: 7
			},
			{
				name: 'Folake Emmanuel',
				position: 'Lead Engineer',
				image: 'images/team-img4.png',
				id: 8
			},
			{
				name: 'Samuel Chukwu',
				position: 'Lead Architect',
				image: 'images/team-img3.png',
				id: 9
			},
			{
				name: 'Folake Emmanuel',
				position: 'Lead Engineer',
				image: 'images/team-img4.png',
				id: 10
			},
			{
				name: 'Michael Doziea',
				position: 'MD/CEO',
				image: 'images/team-img2.png',
				id: 11
			},
		],

		Services: [
			{	
				H1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
				P: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				id: 0
			},
			{
				header: "Competencies",
				id: 1
			},
			{
				servicesList: 'Lorem ipsum dolor sit amet',
				id: 2
			}, 
			{
				servicesList: 'Lorem ipsum dolor sit amet',
				id: 3
			},
			{
				servicesList: 'Lorem ipsum dolor sit amet',
				id: 4
			},
			{
				servicesList: 'Lorem ipsum dolor sit amet',
				id: 5
			},
			{
				servicesList: 'Lorem ipsum dolor sit amet',
				id: 6
			},
			{
				servicesList: 'Lorem ipsum dolor sit amet',
				id: 7
			},
			{
				header: "Projects",
				id: 8
			},
			{
				project: 'Construction of Onne Flyover Bridge1',
				image: 'images/projects-1.png',
				id: 9
			},
			{
				project: 'Construction of Onne Flyover Bridge2',
				image: 'images/projects-1.png',
				id: 10
			},
			{
				project: 'Construction of Onne Flyover Bridge3',
				image: 'images/projects-1.png',
				id: 11
			},
		],


		vacancy: [
			// {
			// 	jobTitle: 'Software Engineer',
			// 	skillRequired: 'React',
			// 	salary: '$2000',
			// 	id: 0
			// },
			// 
			// 	jobTitle: 'Sales Representative',
			// 	skillRequired: 'React',
			// 	salary: '$2000',
			// 	id: 1
			// },
			// {
			// 	jobTitle: 'Public Marketer',
			// 	skillRequired: 'React',
			// 	salary: '$2000',
			// 	id: 2
			// }
		]
	}
	render(){
		return (
			<Router>
				<div className="pa-etos">
				    <NavBar />
				      <Switch>
					    <Route exact path='/' component={Home} />
					    <Route path='/about'
					    	render={(props)=>
					    		(<About {...props} about={this.state.About}/>)} />
					    <Route path='/services' 
					    	render={(props)=>
					    		(<Services {...props} services={this.state.Services} />)} />
					    <Route path='/contact' component={Contact} />
					   	<Route path='/vacancies'
					 		render={(props)=>
					 			(<Vacancies {...props} vacancy={this.state.vacancy} />)} />
					    <Route path='/:post_id' component={Post} />    
				      </Switch> 
				    <Footer />
			    </div>
			</Router> 
		  );
	}
}
export default App;