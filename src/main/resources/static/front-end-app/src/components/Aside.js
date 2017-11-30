import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Aside extends Component {
	render() {
		return (
			<aside className='menu'>
				<ul className='menu-list'>
					<li><NavLink to='/feeds' className='is-active is-info'>Feeds</NavLink></li>
					<li><NavLink to='/my-groups'>Minhas Disciplinas</NavLink></li>
					<li><NavLink to='/add-group'>Criar Grupo</NavLink></li>
					{/*
					<li><NavLink to='#disciplinas'>Todas as disciplinas</NavLink></li>
					<li><NavLink to='#disciplinas'>Sugestões de Disciplinas</NavLink></li>
					
					*/}
				</ul>
			</aside>
		)
	}
}
