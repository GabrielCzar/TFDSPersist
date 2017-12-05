import React, { Component } from 'react'
import NavBar from '../components/Navbar'
//import Footer from '../components/Footer'
import Home from '../components/Home'

export default class HomePage extends Component {
    render () {
        return (
            <div>
                {/* <NavBar logged /> */}
                <NavBar/>

                <Home />

                {/* Recent Posts */}

               
            </div>
        )
    }
}
