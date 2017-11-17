import React from 'react'
import { Container } from 'reactbulma';

export default class Comment extends React.Component {
    render() {
        return (
            <Container>
                    <p>
                        <strong>{ this.props.author || 'Unknown' } </strong>
                        { this.props.content }
                    </p>
            </Container>
        );
    }
}