import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPost, addNewComment } from '../actions/postActions';
import { Card, Form, Button, Container, Spinner, Alert } from 'react-bootstrap';

const PostItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(state => state.posts.post);
  const { isAuthenticated } = useSelector(state => state.auth);
  const [comment, setComment] = useState('');

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewComment({id: post._id, content: comment}));
    setComment('');
  };

  const error = useSelector((state) => state.auth.error);

  if (!post) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Spinner animation="border" />
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      {error && <Alert variant="danger">{error}</Alert>}
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
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
