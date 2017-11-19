import React, { Component } from 'react'
import Comment from './Comment'

export default class Post extends Component {
    constructor(props) { 
        super(props) 

        this.state = {
            comments: [],
            newCommentContent: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this) 
        this.handleContentChange = this.handleContentChange.bind(this)
    }

    handleSubmit(e) {
        this.setState({
            comments: [
                ...this.state.comments, 
                { content: this.state.newCommentContent }
            ]
        })

        this.setState({ newCommentContent: '' })

        e.preventDefault()
    }

    handleContentChange(e) {
        this.setState({ newCommentContent: e.target.value })
    }

    render () {
        return (
            <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    Disciplina
                </p>
                <a href="#opts" class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </span>
                </a>
            </header>

            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <div class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
                        </div>
                    </div>
                    <div class="media-content">
                        <p class="title is-5">John Smith</p>
                        <p class="subtitle is-6">@email</p>
                    </div>
                    <div class="media-right">
                        <a>
                            <span class="icon is-small"><i class="fa fa-heart"></i></span>
                            <span> 0</span>
                        </a>
                    </div>
                </div>

                <p>{ this.props.content || 'Conteúdo do Post' }</p> 
                
                {/* LIKE AND DESLIKE, MAYBE SAVE OR SHARE */}
                <br />
                
                
                <hr />
                
                <form onSubmit={this.handleSubmit}>
                    <div className='field control'>
                        <input className='input'
                            value={this.state.newCommentContent} 
                            onChange={this.handleContentChange} 
                            placeholder='Digite seu comentário' />
                    </div>
                </form>

                { this.state.comments.map((comment, index) => {
                    return <Comment key={index} content={comment.content} author='Admin' />
                })}

                
            </div>
          </div>
        )
    }
}