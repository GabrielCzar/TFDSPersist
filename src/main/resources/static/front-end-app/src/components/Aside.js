import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import MyGroups from './MyGroups'

export default class Aside extends Component {
	render() {
		return (
			<aside className='menu'>
				<ul className='menu-list'>
					<p className='menu-label'>
						Geral
					</p>
				
					<li><NavLink to='/home' className='is-active is-info'>Posts</NavLink></li>
					
					<li><NavLink to='/groups'>Grupos</NavLink></li>

					<MyGroups />
					
					{/*
					<li><NavLink to='#disciplinas'>Todas as disciplinas</NavLink></li>
					<li><NavLink to='/add-group'>Criar Grupo</NavLink></li>
					<li><NavLink to='#disciplinas'>Sugestões de Disciplinas</NavLink></li>
					
					*/}
				</ul>
			</aside>
		)
	}
}
