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
    return (
      this.props.friends.map(friend => {
        return <div key={friend.id}>
          <h1>{friend.name}</h1>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
        </div>

      })
    )

  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}


export default connect(mapStateToProps, { getFriends })(GetFriends);