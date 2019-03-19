import React, { Component } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Input } from "reactstrap";

export default class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    console.log("yerrr");
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        this.setState(() => ({ friends: response.data }));
      })
      .catch(err => console.log(err));
  }

  // const id = props.match.params.id;
  // const friend = friend.find(friend => `${friend.id}` === id);
  render() {
    const { friends } = this.state;
    return (
      <div>
        {this.state.friends.map(friend => (
          <FriendsDetails friend={friend} />
        ))}
        
      </div>

    );
}
        handleInputChange = e => {
            this.setState({ [e.target.name]: e.target.value });
          };
}




function FriendsDetails({ friend }) {
  const { name, age, email } = friend;
  return (
    <div>
      <div>
        Name: <h1>{name}</h1>
      </div>
      <div>
        Age: <h1>{age}</h1>
      </div>
      <div>
        Email: <h1>{email}</h1>
      </div>
    </div>
  );
}

function AddAFriend () {
    // const {name, age, email } = friend;
    return(
        <div>
            <Form>
                <FormGroup>
                    <Input 
                    type='text'
                    placeHolder='name'
                    name='name'
                    value={this.state.friends}
                    onChange={this.handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                <Input 
                type='text'
                placeHolder='age'
                name='age'
                value={this.state.friends}
                onChange={this.handleInputChange}
                />
            </FormGroup>
            <FormGroup>
            <Input 
            type='text'
            placeHolder='email'
            name='email'
            value={this.state.friends}
            onChange={this.handleInputChange}
            />
        </FormGroup>
            </Form>
        </div>
    )
}