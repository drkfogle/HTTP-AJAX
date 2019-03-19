import React from 'react';
import { Button } from "reactstrap";
const Update = props => {
    const id = props.match.params.id;
    const friend = friend.find(friend => `${friend.id}` === id);
    return (
        <Button>Add Friend</Button>
    )
}