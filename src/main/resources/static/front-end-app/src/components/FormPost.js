import React, { Component } from 'react'

export default class FormPost extends Component {
    render () {
        return (
            <div>
                <form>
                    <div class="field">
                        <label class="label">Título</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Título" />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Conteúdo</label>
                        <div class="control">
                            <textarea class="textarea" placeholder="Conteúdo"></textarea>
                        </div>
                    </div>

                    <div class="field">
                        <div class="file is-link ">
                            <label class="file-label">
                                <input class="file-input" type="file" name="resume" />
                                <span class="file-cta ">
                                    <span class="file-icon">
                                    <i class="fa fa-upload"></i>
                                    </span>
                                    <span class="file-label">
                                    Arquivo...
                                    </span>
                                </span>
                            </label>
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
