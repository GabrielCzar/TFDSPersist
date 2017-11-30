import React from 'react'
import { NavLink } from 'react-router-dom'

//const baseUrl = 'http://localhost:8080/login'
//const opts = {
// 'Authorization': 'Basic YWRtaW46YWRtaW4=',
  //  'Content-type': 'application/x-www-form-urlencoded'
//}
export default class FormLogin extends React.Component {
    render() {
        return (
            <form>
                <div class="field">
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="Email" />
                        <span class="icon is-small is-left">
                            <i class="fa fa-envelope"></i>
                        </span>
                    </div>
                </div>
                <div class="field">
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="password" placeholder="Senha" />
                        <span class="icon is-small is-left">
                            <i class="fa fa-lock"></i>
                        </span>
                    </div>
                </div>
                <div class="field">
                    <div className="level">
                        {/* TODO */}
                        <div class="control level-left">
                            <button class="button is-text level-item">Esqueci a senha</button>
                        </div>
                        
                        <div class="control level-right">
                            <button class="button is-success is-link level-item">
                                <span>Entrar </span>
                                <span class="icon is-small is-left">
                                    <i class="fa fa-angle-right"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="field">
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
