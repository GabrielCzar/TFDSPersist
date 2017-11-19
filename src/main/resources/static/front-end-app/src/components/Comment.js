import React from 'react'

export default class Comment extends React.Component {
    render() {
        return (
            <p>
                <strong>{ this.props.author || 'Unknown' } </strong>
                { this.props.content }
            </p>
        );
    }
}
