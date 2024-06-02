import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPost, addNewComment } from '../actions/postActions';
import { Card, Form, Button, Container } from 'react-bootstrap';

const PostItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(state => state.post.post);
  const { isAuthenticated, role } = useSelector(state => state.auth);
  const [comment, setComment] = useState('');

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewComment(id, { content: comment }));
    setComment('');
  };

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>{post?.title}</Card.Title>
          <Card.Text>{post?.content}</Card.Text>
          <Card.Footer>
            {isAuthenticated && (
              <Form onSubmit={onSubmit}>
                <Form.Group>
                  <Form.Label>Leave a comment</Form.Label>
                  <Form.Control
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button type="submit">Add Comment</Button>
              </Form>
            )}
          </Card.Footer>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PostItem;
