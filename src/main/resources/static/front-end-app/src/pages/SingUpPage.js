import React from 'react'
import SingUp from '../components/SingUp'
import Logo from '../components/Logo'

export default class SingUpPage extends React.Component {
    render () {
        return (
            <section className="hero is-light is-bold is-fullheight">
                <div className="hero-body">
                   <div className="container level">
                        <div className="level-item has-text-centered">
                            <div className="box">
                                <Logo />
                                
                                <h1 className='title is-1'>Cadastro</h1>

                                <hr/>
                                
                                <SingUp />
                            </div>
                        </div>
                    </div>
                </div>
          </section>
        )
    }
}