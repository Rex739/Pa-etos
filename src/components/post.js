import React, {Component} from 'react'
import axios from 'axios'

class Post extends Component{
	state = {
		posts: null
	}
	componentDidMount(){

		let id = this.props.match.params.post_id;
		axios.get('http://jsonplaceholder.typicode.com/posts/' + id)
		.then(res=>{
			this.setState({
				posts: res.data
			})
			console.log(res)
		})
	}
	
	render(){
		const {posts} = this.state;
		const fullPost = posts ? ( 
				<div className="text-center container">
					<h4>{posts.title}</h4>
					<p>{posts.body}</p>
				</div>
			) : (
				<div>loading posts</div>
			 )
		return(
			<div>
				<h1 className="test">Services</h1>
				<p>{fullPost}</p>
			</div>
		)
	}
}

export default Post