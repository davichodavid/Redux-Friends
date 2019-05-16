import React from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../actions';

class GetFriends extends React.Component {
  state = {
    name: '',
    age: '',
    email: ''
  }

  componentDidMount() {
    this.props.getFriends();
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    this.props.friends && this.props.friends.map(friend => {
      return (
        <div>
          <h1>{friend.name}</h1>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
        </div>
      )
    })
    return 'Loading...';
  }

}

const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}


export default connect(mapStateToProps, { getFriends })(GetFriends);