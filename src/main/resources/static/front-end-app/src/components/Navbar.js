import React, { Component } from 'react'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
    render () {
        return (
            <div className="navbar is-link">
                <div className='container'>
                    <div className="navbar-brand">
                        <div className="navbar-item">
                            <Logo />
                        </div>
                        <div className="navbar-burger burger" data-target="navbar">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div id="navbar" className="navbar-menu">
                        <div className="navbar-start">
                            <NavLink className="navbar-item is-active" to="/home">
                                Home&nbsp;<i className="fa fa-home" aria-hidden="true"></i>
                            </NavLink>
                        </div>

                        <div className="navbar-end">
                            {/* has account */}
                            {   this.props.logged &&
                                (<div className="navbar-item has-dropdown is-hoverable">
                                    <a className='navbar-link' href='#ads'>
                                        { this.props.name || 'Unknown' }
                                    </a>
                                    <div className="navbar-dropdown is-boxed">
                                        <NavLink className="navbar-item" to="/user">
                                            Meu Perfil&nbsp;<i class="fa fa-sign-out" aria-hidden="true"></i>
                                        </NavLink>
                                        <NavLink className="navbar-item" to="/logout">
                                            Sair&nbsp;<i class="fa fa-sign-out" aria-hidden="true"></i>
                                        </NavLink>
                                    </div>
                                </div>)
                            }
                            {/* Don't has account */}    
                            <NavLink className='navbar-item' to='/sign-in'>
                                Entrar&nbsp;<i className="fa fa-sign-in" aria-hidden="true"></i>
                            </NavLink>
                            <NavLink className='navbar-item' to='/sign-up'>
                                Cadastrar-se&nbsp;<i className="fa fa-user-plus" aria-hidden="true"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}
