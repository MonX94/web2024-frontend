import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Comment = ({ comment }) => {
  const users = useSelector(state => state.auth.users); // Список користувачів зберігається в auth

  const user = users.find(user => user._id === comment.user);

  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">
          {user ? user.name : 'Unknown User'}
        </Card.Subtitle>
        <Card.Text>{comment.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Comment;
