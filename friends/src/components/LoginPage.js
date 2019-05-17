import React from 'react';
import { connect } from 'react-redux';

import { submitCredsAction } from '../actions';

class LoginPage extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChanges = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.submitCredsAction(this.state.credentials)
      .then(() => {
        this.props.history.push('/friends');
      })
    // this.setState({
    //   username: '',
    //   password: ''
    // })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name='username'
            placeholder='Username'
            value={this.state.credentials.username}
            onChange={this.handleChanges} />
          <input
            name='password'
            placeholder='Password'
            value={this.state.credentials.password}
            onChange={this.handleChanges} />
          <button onClick={this.handleSubmit}>Log In</button>
        </form>
      </div>
    )
  }

}

export default connect(null, { submitCredsAction })(LoginPage);