import React, { Component } from 'react';

export default class Aside extends Component {
	render() {
		return (
			<aside className='menu'>
				<ul className='menu-list'>
					<li><a href='/' className='is-active is-info'>Home</a></li>
					<li><a href='#disciplinas'>Minhas Disciplinas</a></li>
				</ul>
			</aside>
		)
	}
}
