import React from  'react'
import Hero from '../components/Hero'
import Content from '../components/Content'
import Form from 'react-bootstrap/form'
import Button from 'react-bootstrap/button'
import Axios from 'axios'

class ContactPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }

    handleChange = (event) => {
        // console.log(event)

        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({
            disabled: true,
        })

        Axios.post('/api/email', this.state)
        .then(res => {
            if(res.data.success) {
                this.setState({
                    disabled: false,
                    emailSent: true
                })
            } else {
                this.setState({
                    disabled: false,
                    emailSent: false
            })
            }

        })
        .catch(err => {
            this.setState({
                disabled: false,
                emailSent: false
            })
        })
    }

    render() {
        return(
            <div>
                <Hero title={this.props.title} />

                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor='full-name'>Full Name</Form.Label>
                            <Form.Control id='full-name' name='name' type='text' value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='email'>Email</Form.Label>
                            <Form.Control id='email' name='email' type='email' value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='message'>message</Form.Label>
                            <Form.Control id='message' name='message' as='textarea' rows='3' value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>

                        <Button className='d-inline-block' varient='primary' type='submit' disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className='d-inline success-msg'>Email Sent</p>}
                        {this.state.emailSent === false && <p className='d-inline error-msg'>Email Not Sent</p>}
                    </Form>
                    <p>Email: gwensanabria@gmail.com || Cell: (512)522-5218</p>
                </Content>
            </div>
        )
    }

}

export default ContactPage