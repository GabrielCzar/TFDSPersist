import React from 'react'
import Link from 'react-router-dom/Link'

export default class NotFound extends React.Component {
    render () {
        return (
            <section className="hero is-light is-bold is-fullheight has-text-centered">
                <div className="hero-body">
                    <div className="container">       
                        <h1 className='title is-1 '>404</h1>
                        <p className='subtitle'>Página não encontrada :(</p>
                        <Link className='button is-link is-outline' to='/'>
                            Voltar para página inicial
                        </Link>
                    </div>
                </div>
            </section>
        )
    }
}