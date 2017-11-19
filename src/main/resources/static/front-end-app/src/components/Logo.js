import React, { Component } from 'react'
import logo from '../logo.svg'

export default class Logo extends Component {
    render () {
        return (
            <img src={logo} alt="logo" width='100px' height='100px'/>
        )
    }
}