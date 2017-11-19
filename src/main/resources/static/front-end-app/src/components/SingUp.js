import React, { Component } from 'react'

export default class SingUp extends Component {
    render () {
        return (
            <div>
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
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="password" placeholder="Confirme a Senha" />
                            <span class="icon is-small is-left">
                                <i class="fa fa-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <button class="button is-success is-link is-pulled-right">
                            <span>Cadastrar</span>
                            <span class="icon is-small is-left">
                                <i class="fa fa-angle-right"></i>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}