import React from 'react'

export default class Footer extends React.Component {
    render () {
        return (
            <footer className='footer'>
                    <div className="container">
                        <p className='level'>     
                            <span>
                            © 2017 UniShare. Todos os direitos reservados
                            </span>
                            <a href='https://github.com/GabrielCzar' className='button is-text'>GabrielCzar</a>
                        </p>
                    </div>
            </footer>
        )
    }
}