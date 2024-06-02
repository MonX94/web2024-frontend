import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { Link } from 'react-router-dom';
import { Container, ListGroup } from 'react-bootstrap';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h1>Posts</h1>
      <ListGroup>
        {posts.map(post => (
          <ListGroup.Item key={post._id}>
            <Link to={`/posts/${post._id}`}>{post.title}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Posts;
