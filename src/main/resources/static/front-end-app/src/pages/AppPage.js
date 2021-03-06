import React, { Component } from 'react'
import NavBar from '../components/Navbar'
import Content from '../components/Content'
import PostList from '../components/PostList'

export default class AppPage extends Component {

    render () {
        return (
            <div>
                <NavBar />
		
		        <Content comp={<PostList/>} />

            </div>
        )
    }
}
