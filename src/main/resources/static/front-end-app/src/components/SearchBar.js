import React, { Component } from 'react'

export default class SearchBar extends Component {
    render () {
        return (
            <div class="field has-addons">
                <div class="control">
                    <input class="input" type="text" placeholder="Pesquisar" />
                </div>
                <div class="control">
                    <a class="button is-white">
                        <i class="fa fa-search"></i>
                    </a>
                </div>
            </div>
        )
    }
}
