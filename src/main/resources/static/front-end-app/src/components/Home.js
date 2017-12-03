import React from 'react'
// import home from '../imgs/home-page.jpg'
// import styles from '../css/homepage.css'

export default class Home extends React.Component {
    render () {
        return (
            <div className='x-space is-uppercase'>
                <div className='container is-fluid'>
                    <div class="tile is-ancestor">
                        <div class="tile is-vertical">
                            <div class="tile">
                                <div class="tile is-parent is-vertical">
                                    <article class="tile is-child notification is-primary">
                                    <p class="title">Encontre o material desejado</p>
                                    </article>
                                </div>
                                <div class="tile is-parent">
                                    <article class="tile is-child notification is-info">
                                    <p class="title">Acompanhe suas disciplinas</p>
                                    </article>
                                </div>
                                <div class="tile is-parent is-vertical">
                                    <article class="tile is-child notification is-danger">
                                    <p class="title">Compartilhe materiais com outros estudantes</p>
                                    </article>
                                </div>
                                <div class="tile is-parent">
                                    <article class="tile is-child notification is-warning">
                                    <p class="title">Faça perguntas</p>
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