import React, { Component } from 'react'
import List from '../components/List'
import NavBar from '../components/Navbar'

const apiPosts = 'http://localhost:8080/api/posts'

export default class AppPage extends Component {
    constructor(props) {
	super(props);
	this.state = { posts: {} };
    }

    async componentDidMount() { 
        fetch(apiPosts, { mode: 'cors', headers: { 'Content-Type':'application/json' }})
		    .then((resp) => resp.json())
		    .then(({ _embedded }) => {
			    const posts = _embedded.posts.map(a => ({ ...a, url: a._links.self.href }));
			
			//console.log(posts);
			this.setState({ posts: JSON.stringfy(posts) })
		    });
	    
    }

    render () {
        return (
            <div>
                <NavBar />
		
		<List posts={this.state.posts}/>
            </div>
        )
    }
}
