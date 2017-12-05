import React from 'react'
import { NavLink } from 'react-router-dom'

const BASE_URL = 'http://localhost:8080';

export default class FormLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
	this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({
		    email: event.target.value
        });
    }

    handleChangePass(e) {
        this.setState({
	        password: e.target.value
	    })     
    }

    handleSubmit(event) {
	let auth = btoa(this.state.email + ':' + this.state.password);
       
	let myHeaders = new Headers({
        'X-Requested-With': 'XMLHttpRequest',
	    'WWW-Authenticate': 'Basic ' + auth,
	  
        });

        let myInit = {
            method: 'GET',
            headers: myHeaders,
	    mode: 'no-cors'
        };

        fetch(BASE_URL + '/login', myInit);

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="email" placeholder="Email"
                               value={this.state.email}
                               onChange={this.handleChangeEmail} />
                        <span className="icon is-small is-left">
                            <i className="fa fa-envelope"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="password" placeholder="Senha"
                               value={this.state.password}
                               onChange={this.handleChangePass} />
                        <span className="icon is-small is-left">
                            <i className="fa fa-lock"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <div className="level">
                        {/* TODO */}
                        <div className="control level-left">
                            <button className="button is-text level-item">Esqueci a senha</button>
                        </div>
                        
                        <div className="control level-right">
                            <button className="button is-success is-link level-item">
                                <span>Entrar </span>
                                <span className="icon is-small is-left">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="field">
                    <p className='level'>
                        <span className='level-item'>Não possui uma conta? </span>
                        <NavLink to='/sign-up' className='button is-success is-outlined level-item'> 
                            Cadastre-se
                        </NavLink>
                    </p>
                </div>
            </form>
        )
    }
}
