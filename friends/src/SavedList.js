import React, { Component } from "react";

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <h3> Add a friend</h3>
          {this.props.list.map(newFriend => (
            <div>
              <div>
                Name: <h1>{newFriend.name}</h1>
              </div>
              <div>
                Age: <h1>{newFriend.age}</h1>
              </div>
              <div>
                Email: <h1>{newFriend.email}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
