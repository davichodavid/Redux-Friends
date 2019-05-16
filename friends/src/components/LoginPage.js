import React from 'react';
import { connect } from 'react-redux';

import { submitCredsAction } from '../actions';

class LoginPage extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.submitCredsAction(this.state);
  }

  render() {
    return (
      <div>
        <form>
          <input
            name='username'
            placeholder='Username'
            value={this.state.username}
            onChange={this.handleChanges} />
          <input
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChanges} />
          <button onClick={this.handleSubmit}>Log In</button>
        </form>
      </div>
    )
  }

}

export default connect(null, { submitCredsAction })(LoginPage);