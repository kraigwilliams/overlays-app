import React, { Component } from 'react'
import LoginForm from '../../Components/Login/Login'
import { Section } from '../../Components/Utils/Utils'

 class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    //const { location, history } = this.props
    //const destination = (location.state || {}).from || '/topics'
    console.log("checking")
    this.props.history.push('/topics')
  }

  render() {
    return (
      <Section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}

export default LoginPage;