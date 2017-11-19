import React, { Component } from 'react'
import NavBar from '../components/Navbar'
import List from '../components/List'

export default class HomePage extends Component {
    render () {
        return (
            <div>
                {/* <NavBar logged /> */}
                <NavBar/>

                <List />
            </div>
        )
    }
}