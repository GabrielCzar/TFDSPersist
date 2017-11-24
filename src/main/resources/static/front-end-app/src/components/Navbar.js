import React, { Component } from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'

export default class NavBar extends Component {
    render () {
        return (
            <div className="navbar is-info">
                <div className='container'>
                <div className="navbar-brand">
                    <a className="navbar-item" href="#logo">
                        <Logo />
                    </a>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item is-active" href="https://bulma.io/">
                            Home
                        </a>
                    </div>
                    
		    <div className='navbar-item'>
                   	 <SearchBar />
		    </div>

                    <div className="navbar-end">


                        
                        {/* has account */}
                        {   this.props.logged &&
                            (<div className="navbar-item has-dropdown is-hoverable">
                                <a className='navbar-link' href='#ads'>
                                    { this.props.name || 'Unknown' }
                                </a>
                                <div className="navbar-dropdown is-boxed">
                                    <a className="navbar-item" href="#a">
                                        Meu Perfil</a>
                                    <a className="navbar-item" href="#a">
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
