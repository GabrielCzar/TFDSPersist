import React, { Component } from 'react'
import NavBar from '../components/Navbar'
import Content from '../components/Content'
import GroupList from '../components/GroupList'

export default class GroupPage extends Component {

    render () {
        return (
            <div>
                <NavBar />
		
		        <Content comp={<GroupList />} />

            </div>
        )
    }
}
