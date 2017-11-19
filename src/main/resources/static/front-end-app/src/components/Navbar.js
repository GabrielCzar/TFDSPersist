import React, { Component } from 'react'
import Logo from './Logo'

export default class NavBar extends Component {
    render () {
        return (
            <div class="navbar is-primary">
                <div className='container'>
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <Logo />
                    </a>
                    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item is-active" href="https://bulma.io/">
                            Home
                        </a>
                    </div>

                    <div class="navbar-end">
                        {/* has account */}
                        {   this.props.logged &&
                            (<div class="navbar-item has-dropdown is-hoverable">
                                <a className='navbar-link' href='#ads'>
                                    { this.props.name || 'Unknown' }
                                </a>
                                <div class="navbar-dropdown is-boxed">
                                    <a class="navbar-item" href="#a">
                                        Meu Perfil</a>
                                    <a class="navbar-item" href="#a">
                                        Sair</a>
                                </div>
                            </div>)
                        }
                        {/* Don't has account */}    
                        <a className='navbar-item' href='#add'>
                            Entrar</a>
                        <a className='navbar-item' href='#dsad'>
                            Cadastrar-se</a>
                    </div>
                </div>
            </div>
        </div>    
        )
    }
}