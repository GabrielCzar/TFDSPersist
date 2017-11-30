import React from 'react'
import Post from './Post'
import follow from '../services/Follow'

const root = 'http://localhost:8080/api';

export default class PostList extends React.Component {
	constructor(props) {
	    super(props);
		this.state = { posts: {}, attributes: [], links: {}}
	}

	loadFromAPI() {
		follow(fetch, root, [
			{ rel: 'posts', 
				params: { mode: 'cors', headers: { 'Content-Type':'application/json' }} }])
				.then(resp => {console.log(resp)})		
		//	  fetch(root, { mode: 'cors', headers: { 'Content-Type':'application/json' }})
		//.then((resp) => resp.json())
		//.then( response  => {
		//	const posts = response._embedded.posts.map(a => ({ ...a, url: a._links.self.href }));
		//	this.setState({ 
		//		posts,
		//		attributes: Object.keys(this.schema.properties),
		//		links: response._links
		//	})
		//});
	}	

	async componentDidMount() {
		this.loadFromAPI();
	}

    render () {
        var posts = [];
		var p = this.state.posts;
		
		for (let i = 0; i < p.length; i++) {
			posts.push(
				<div className='x-space'>
					<Post key={p[i]._links.self.href} post={p[i]} />
				</div>
			);
		}

        return (
            <div>
                {posts}
           </div>
        )
    }
}
