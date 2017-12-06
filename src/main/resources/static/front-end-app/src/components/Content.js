import React, { Component } from 'react'
import Aside from './Aside'


class Content extends Component {
	render () {
		return (
		<div className='container'>
			<div className='columns x-space'> {/* So mostrar pra quem ta logado */}
				<div className='column is-one-quarter'>
					<Aside />
				</div>
				<div className='column'> 
					{ this.props.comp }
				</div>
			</div>
		</div>
		)
	}
}

export default Content;
