import React from 'react'
// import home from '../imgs/home-page.jpg'
// import styles from '../css/homepage.css'

export default class Home extends React.Component {
    render () {
        return (
            <div className='x-space is-uppercase'>
                <div className='container is-fluid'>
                    <div className="tile is-ancestor">
                        <div className="tile is-vertical">
                            <div className="tile">
                                <div className="tile is-parent is-vertical">
                                    <article className="tile is-child notification is-primary">
                                    <p className="title">Encontre o material desejado</p>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child notification is-info">
                                    <p className="title">Acompanhe suas disciplinas</p>
                                    </article>
                                </div>
                                <div className="tile is-parent is-vertical">
                                    <article className="tile is-child notification is-danger">
                                    <p className="title">Compartilhe materiais com outros estudantes</p>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child notification is-warning">
                                    <p className="title">Faça perguntas</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}
