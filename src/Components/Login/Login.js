import React, { Component } from 'react'


import AuthApiService from '../../Services/auth-api-service'
import {Button, Input} from '../Utils/Utils';

/*
LoginForm is the Component which holds the JSX for loggging in to the app.
*/ 
 class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }


  componentDidMount(){
    document.title="Login - Overlays"
  }



  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
       
        user_name.value = ''
        password.value = ''
     
      
        this.props.onLoginSuccess()
        this.props.history.push('/topics');
      })
      
      .catch(res => {
        this.setState({ error: res.error })
      })
      
  }
  

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>

        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <Input
          aria-required="true"
            required
            name='user_name'
            id='LoginForm__user_name'
            />
          
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <Input
            required
            aria-required="true"
            name='password'
            type='password'
            id='LoginForm__password'
          />
        </div>
        <Button type="submit"> Login</Button>
      </form>
    )
  }
}

export default LoginForm;