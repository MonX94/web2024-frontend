import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewPost } from '../actions/postActions';
import { Form, Button, Container } from 'react-bootstrap';

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    user: ''
  });

  const dispatch = useDispatch();
  const authUser = useSelector(state => state.auth.user);

  useEffect(() => {
    setFormData(formData => ({ ...formData, user: authUser }));
  }, [authUser]);

  const { title, content } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    dispatch(createNewPost(formData));
  };

  return (
    <Container>
      <h1>Create Post</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="content">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter content"
            name="content"
            value={content}
            onChange={onChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </Container>
  );
};

export default CreatePost;
