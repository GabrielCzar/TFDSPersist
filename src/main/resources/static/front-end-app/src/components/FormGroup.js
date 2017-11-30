import React , { Component } from 'react'

export default class FormGroup extends Component {
    render () {
        return (
            <div>
                <form>
                    <div class="field">
                        <label class="label">Disciplina</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Nome da disciplina" />
                        </div>
                    </div>

                    <div class="field is-grouped ">
                        <div class="control">
                            <button class="button is-link">Submit</button>
                        </div>
                        <div class="control">
                            <button class="button is-text">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}