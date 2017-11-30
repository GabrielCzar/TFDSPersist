import React, { Component } from 'react'
import Comment from './Comment'
import { NavLink } from 'react-router-dom';

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
            <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    { this.props.post.title || 'Disciplina'}
                </p>
                <NavLink to="#opts" className="card-header-icon" aria-label="more options" >
                    <span className="icon">
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                </NavLink>
            </header>

            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <div className="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
                        </div>
                    </div>
                    <div className="media-content">
                        <p className="title is-5">{ this.props.post.author.name || 'John Smith' }</p>
                        <p className="subtitle is-6">{ this.props.post.author.email || '@email' }</p>
                    </div>
                    <div className="media-right">
                        <NavLink >
                            <span className="icon is-small">
                                <i class="fa fa-hand-rock-o" aria-hidden="true"></i>
                                {/* LIKED */}
                                <i className="fa fa-hand-spock-o" aria-hidden="true"></i>
                            </span>
                            <span> 0</span>
                        </NavLink>
                    </div>
                </div>

                <p>{ this.props.post.content || 'Conteúdo do Post' }</p> 
                
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
