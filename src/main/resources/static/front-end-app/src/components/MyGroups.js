import React from 'react'
import {NavLink} from 'react-router-dom'

export default class MyGroups extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groups: []
        }
    }


    render () {
        var myGroups = this.state.groups.map((group, index) => {
            return (<NavLink className='is-capitalized' to={group.url}>{ group.name }</NavLink>)
        })
        
        return (
            <div>
                <p className='menu-label'>
                    Minhas Disciplinas
                </p>
                
                {myGroups}
            </div>
        )
    }
}