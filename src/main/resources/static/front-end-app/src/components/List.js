import React from 'react'
import Post from './Post'

export default class List extends React.Component {
    render () {
        var posts = this.props.posts.json();
	var postsList = posts.map(post =>
            <div className='x-space'>
                <Post key={post._links.self.href} post={post} />
            </div>
        )
        return (
            <div>
                {postsList}
           </div>
        )
    }
}
