import React, { Component } from 'react'

const BASE_URL = "http://localhost:8080";

export default class SingUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '', 
            password: '', 
            confirmPassword: '',
            className: '',
            message: ''
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChangeConfPass = this.handleChangeConfPass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({
            name: event.target.value
        });
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

    handleChangeConfPass(e) {
        this.setState({
            confirmPassword: e.target.value
        })    
    }

    handleSubmit(event) {
        let name = this.state.name;
        let email = this.state.email;
        let password = this.state.password;
        let confpass = this.state.confirmPassword;

        if (password !== confpass){
            this.setState({
                className: 'notification is-danger',
                message: 'As senhas são diferentes' 
            })
            setTimeout( () => { this.setState({className:'', message: ''}) }, 1500);
            return false;
        }

        let myHeaders = new Headers({
            'X-Requested-With': 'XMLHttpRequest'
        });

        let req = {
            method: 'POST',
            headers: myHeaders,
            mode: 'no-cors',
            body: JSON.stringfy({
                name: name,
                email: email,
                password: password
            })
        };

        fetch(`${BASE_URL}/sign-up`, req);

        this.setState({
            className: 'notification is-success',
            message: 'Cadastrado com sucesso!'
        })
        
        setTimeout( () => { this.setState({className:'', message: ''}) }, 1500);
        event.preventDefault();
    }

    render () {
        return (
            <div>
                <div className={this.state.className}>
                    { this.state.message }
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="text" placeholder="Nome"
                                value={this.state.name}
                                onChange={this.handleChangeName} 
                             />
                            <span className="icon is-small is-left">
                                <i className="fa fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChangeEmail} 
                                required
                             />
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="password" placeholder="Senha"
                               value={this.state.password}
                               onChange={this.handleChangePass} 
                               required
                             />
                            <span className="icon is-small is-left">
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="password" placeholder="Confirme a Senha"
                                value={this.state.confirmPassword}
                                onChange={this.handleChangeConfPass} 
                             />
                            <span className="icon is-small is-left">
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <button className="button is-success is-link is-pulled-right">
                            <span>Cadastrar</span>
                            <span className="icon is-small is-left">
                                <i className="fa fa-angle-right"></i>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}