import React from 'react'
import Group from './Group'

const root = 'http://localhost:8080/api';

export default class GroupList extends React.Component {
	constructor(props) {
	    super(props);
		this.state = { groups: {}, links: {}}
	}

	loadFromAPI() {
		fetch(`${root}/groups`, { mode: 'cors', headers: { 'Content-Type':'application/json' }})
			.then((resp) => resp.json())	
			.then( response  => {
			console.log(response);
			const groups = response._embedded.groups.map(a => ({ ...a, url: a._links.self.href }));
			this.setState({ 
				groups,
				//attributes: Object.keys(this.schema.properties),
				links: response._links
			})
		});
	}	

	async componentDidMount() {
		this.loadFromAPI();
	}

    render () {
        var groups = [];
		var p = this.state.groups;
		
		for (let i = 0; i < p.length; i++) {
			groups.push(
				<div key={i} className='x-space'>
					<Group key={p[i]._links.self.href} group={p[i]} />
				</div>
			);
		}

        return (
            <div>
                {groups}
           </div>
        )
    }
}
