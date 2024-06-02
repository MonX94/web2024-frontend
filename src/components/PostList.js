import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Posts</h1>
      {posts.map(post => (
        <Card key={post._id} className="mb-3">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.content}</Card.Text>
            <Button as={Link} to={`/posts/${post._id}`}>View Post</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default PostList;
