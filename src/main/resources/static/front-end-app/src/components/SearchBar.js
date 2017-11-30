import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) { 
        super(props) 

        this.state = {
            search: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this) 
        this.handleContentChange = this.handleContentChange.bind(this)
    }

    handleSubmit (e) 
    {
        // Search in API

        this.setState({ search: '' })

        e.preventDefault()
    }

    handleContentChange(e) {
        this.setState({ search: e.target.value })
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" 
                        value={this.state.search} 
                        onChange={this.handleContentChange} 
                        type="text" 
                        placeholder="Pesquisar" />
                    </div>
                    <div className="control">
                        <button className="button is-white">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
