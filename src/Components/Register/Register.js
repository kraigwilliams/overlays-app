import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../../Services/auth-api-service'

/*
RegistrationForm renders a form for a new user to register.
*/
export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

componentDidMount(){
  document.title= "Create Account - Overlays"
}


  handleSubmit = event => {
    event.preventDefault()
    const { user_name, user_password } = event.target

    this.setState({ error: null })
    AuthApiService.postUser({
      user_name: user_name.value,
      user_password: user_password.value,
     
    })
      .then(user => {
      
        user_name.value = ''
        user_password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
       
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
           Create User name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
           Set Password <Required />
          </label>
          <Input
            name='user_password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
       
        <Button type='submit'>
          Register
        </Button>
      </form>
    )
  }
}