import React from 'react'

export default class MyGroups extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groups: []
        }
    }


    render () {
        var myGroups = this.state.groups.map((group, index) => {
            return (<NavLink to={group.url}>{ group.name }</NavLink>)
        })
        
        return (
            <div>
                {myGroups}
            </div>
        )
    }
}