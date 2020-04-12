import React from "react";
import { Card, Image } from "semantic-ui-react";

const Profile = (props) => {
  let { avatar, username, bio } = props.currentUser
  return <Card>
    <Image src={avatar} />
    <Card.Content>
      <Card.Header>{username}</Card.Header>
      <Card.Description>{bio}</Card.Description>
    </Card.Content>
  </Card>
}

export default Profile;
