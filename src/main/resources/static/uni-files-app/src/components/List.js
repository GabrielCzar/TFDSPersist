import React, { Component } from 'react';
import Post from './Post'
import { Container, Pagination, PaginationItem, PaginationLink } from 'reactbulma';

export default class List extends Component {
    render () {
        return (
            <Container>
                <div className='mt-3 mb-3'>
                    <Post title="testando mensagem" />
                </div>
                <div className='mt-3 mb-3'>
                    <Post title="Caralho porra birl" />  
                </div>

                <Pagination>
                    <PaginationItem>
                        <PaginationLink previous href='#'/>
                    </PaginationItem>
        
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
        
                    <PaginationItem>
                        <PaginationLink next href="#" />
                    </PaginationItem>
                </Pagination>

           </Container>
        )
    }
}