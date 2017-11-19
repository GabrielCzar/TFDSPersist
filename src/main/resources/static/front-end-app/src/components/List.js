import React from 'react'
import Post from './Post'

export default class List extends React.Component {
    state = {
        posts = []
    }

    async componentDidMount() {
        const baseURL = 'https://api.github.com';
        const opts = {
          header: {
            'User-Agent': 'GithubApp'
          },
        };
    
        const userResponse = await fetch(`${baseURL}/orgs/rocketseat/members`, opts);
        const reposResponse = await fetch(`${baseURL}/orgs/rocketseat/repos`, opts);
    
        this.setState({
          repos: await reposResponse.json(),
          users: await userResponse.json(),
        });
    }

    render () {
        return (
            <div>
                <div className='x-space'>
                    <Post content='teste content' />
                </div>

                <div className='x-space'>
                    <Post content='teste content2' />
                </div>

                <div className='x-space' >
                    <Post content='teste content3' />
                </div>
            </div>
        )
    }
}