import React, { Component } from 'react'
import Login from '../components/Login'
import Logo from '../components/Logo'

export default class LoginPage extends Component {
    render () {
        return (
            <section className="hero is-light is-bold is-fullheight">
            <div className="hero-body">
                <div className="container level">
                    <div className="level-item has-text-centered">
                        <div className="box">
                            <Logo />

                            <h1 className='title is-1'>Entrar</h1>

                            <hr/>
                            
                            <Login />
                        </div>
                    </div>
                </div>
            </div>
          </section>
        )
    }
}