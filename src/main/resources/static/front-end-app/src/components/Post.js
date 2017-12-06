import React, { Component } from 'react'
import Comment from './Comment'
import { NavLink } from 'react-router-dom';

export default class Post extends Component {
    constructor(props) { 
        super(props) 

        this.state = {
            comments: [],
            newCommentContent: '',
            clicked: false,
            classClicked: 'fa fa-thumbs-o-up',

        }

        this.clickLike = this.clickLike.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) 
        this.handleContentChange = this.handleContentChange.bind(this)
    }

    clickLike(e) {
        let withoutClass = 'fa fa-thumbs-up'
        let withClass = 'fa fa-thumbs-o-up'
        let cclick = this.state.clicked === true ? false : true
        let cclass = cclick === true ?  withoutClass : withClass;
        
        console.log(cclass)

        this.setState({clicked : cclick, classClicked : cclass})

        e.preventDefault()
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
                    <div className="media-content">
                        <p className="title is-6">{ this.props.post.email || 'Email' }</p>
                        <p className="subtitle is-6">{ this.props.post.discipline || '@disciplina' }</p>
                    </div>
                    <div className="media-right">
                        <a onClick={this.clickLike}>
                            <span className="icon is-small" >
                                <i className={this.state.classClicked} aria-hidden="true"></i>
                            </span>
                        </a>
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
                    return <Comment key={index} content={comment.content} author='Unknown' />
                })}

            </div>
          </div>
        )
    }
}
