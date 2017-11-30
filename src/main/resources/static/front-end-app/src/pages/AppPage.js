import React, { Component } from 'react'
import NavBar from '../components/Navbar'
import Content from '../components/Content'

export default class AppPage extends Component {

    render () {
        return (
            <div>
                <NavBar />
		
		        <Content />
            </div>
        )
    }
}
