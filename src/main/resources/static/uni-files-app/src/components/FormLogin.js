import React from 'react'
import { 
    Form
,   FormGroup
,   Input
,   Button, 
Col

} from 'reactstrap'

export default class FormLogin extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup row>
                   <Input type='email' name='email' id='email' placeholder='Email' bsSize='md' />
                </FormGroup>
                <FormGroup row>
                   <Input type='password' name='password' id='pass' placeholder='Senha' bsSize='md' />                
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <a href='#esqueci_a_senha'>Esqueci a senha</a>
                    </Col>
                    <Col md={6}>
                        <Button type='submit' color='primary'>Entrar</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}