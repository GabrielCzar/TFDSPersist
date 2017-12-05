import React, { Component } from 'react'
import Comment from './Comment'
import { NavLink } from 'react-router-dom';

export default class Post extends Component {
    render () {
        return (
            <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-6">{ this.props.group.discipline || 'Unknown' }</p>
                    </div>
                    <div className="media-right">
                        <NavLink to='#'>
                            <span className="tag is-info">
                                Seguir&nbsp;
                                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            </span>
                        </NavLink>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}
