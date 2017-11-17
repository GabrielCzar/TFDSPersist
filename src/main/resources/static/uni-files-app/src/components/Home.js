import React from 'react'
import Post from './Post'


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Post title='TESTE BIRL' />
        
        <hr />

        <Post title='PORRA' />
      </div>
    )
  }
}