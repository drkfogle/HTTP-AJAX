import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './FriendsList';
import {Route} from 'react-router-dom';
import SavedList from './SavedList';
import { Button } from "reactstrap";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      FriendList : []
    }
  }

  addToFriendsList = friend => {
    const FriendList = this.state.FriendList;
    FriendList.push(friend);
    this.setState({ FriendList });
  };


  render() {
    return (
      <div className="App">
        <SavedList list={this.state.FriendList} />
        <Route path='/' component= {FriendsList} />
        <Button>Save</Button>
      </div>
    );
  }
}

export default App;
