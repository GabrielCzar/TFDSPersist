import React from 'react'
import Post from './Post'

const apiPosts = 'http://localhost:8080/api/posts';

export default class List extends React.Component {
	constructor(props) {
		        super(props);
		        this.state = { posts: {} };
		    }

	    async componentDidMount() {
		            fetch(apiPosts, { mode: 'cors', headers: { 'Content-Type':'application/json' }})
		                        .then((resp) => resp.json())
		                        .then(({ _embedded }) => {
						                            const posts = _embedded.posts.map(a => ({ ...a, url: a._links.self.href }));

						                        console.log(posts);
						                        this.setState({ posts })
						                    });

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
