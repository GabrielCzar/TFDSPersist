import React, { Component } from 'react'
import logo from '../logo.svg'
import { NavLink } from 'react-router-dom'

export default class Logo extends Component {
    render () {
        return (
            <NavLink to='/'>
                <img src={logo} alt="logo" width='100px' height='100px'/>
            </NavLink>
        )
    }
}