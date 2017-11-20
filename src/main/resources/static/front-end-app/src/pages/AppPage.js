import React, { Component } from 'react'
import List from '../components/List'
import NavBar from '../components/Navbar'

export default class AppPage extends Component {

    render () {
        return (
            <div>
                <NavBar />
		
		<List />

            </div>
        )
    }
}
