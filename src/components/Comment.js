import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Comment = ({ comment, onDelete, isAdmin }) => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">
          {'Unknown User'}
        </Card.Subtitle>
        <Card.Text>{comment.content}</Card.Text>
        {isAdmin && (
          <Button variant="danger" onClick={() => onDelete(comment._id)}>
            Delete
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Comment;
