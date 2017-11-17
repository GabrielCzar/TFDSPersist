import React from 'react'
import Comment from './Comment'
import { 
    Card,
    Input,
    Media,
    Image,
    Title,
    SubTitle,
 } from 'reactbulma';

export default class Post extends React.Component {
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

    render() {
        return (
                <Card>
                    <Card.Content>   
                        <Media>
                            <Media.Left>
                                {/* Colocar logo com o tipo de POST - Question | Comentario | Arquivo */}
                                <Image is='48x48' src="http://bulma.io/images/placeholders/96x96.png" alt="Image" />
                            </Media.Left>
                            <Media.Content>
                                <Title is='4'>{ this.props.title }</Title>
                                <SubTitle is='6'>@johnsmith</SubTitle>
                            </Media.Content>
                        </Media>

                        <p>{ this.props.content || 'Conteúdo do Post' }</p> 
                                
                        <hr />

                        <form onSubmit={this.handleSubmit}>
                            <Input
                                value={this.state.newCommentContent} 
                                onChange={this.handleContentChange} 
                                placeholder='Digite seu comentário'
                                />
                        </form>

                        { this.state.comments.map((comment, index) => {
                            return <Comment key={index} content={comment.content} author='Admin' />
                        })}
                    </Card.Content>
                </Card>
        );
    }
}