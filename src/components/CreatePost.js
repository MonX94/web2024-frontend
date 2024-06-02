import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewPost } from '../actions/postActions';
import { Form, Button, Container } from 'react-bootstrap';

const CreatePost = () => {
  const [formData, setFormData] = useState({ title: '', content: '' });
  const dispatch = useDispatch();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewPost(formData));
  };

  return (
    <Container>
      <h1>Create Post</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" value={formData.title} onChange={onChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" name="content" value={formData.content} onChange={onChange} required />
        </Form.Group>
        <Button type="submit">Create Post</Button>
      </Form>
    </Container>
  );
};

export default CreatePost;
