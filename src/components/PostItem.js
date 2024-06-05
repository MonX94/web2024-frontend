import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPost, addNewComment, deleteComment, likePost, dislikePost } from '../actions/postActions';
import { Card, Form, Button, Container, Spinner, Alert } from 'react-bootstrap';
import Comment from './Comment';

const PostItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const post = useSelector(state => state.posts.post);
  const [comment, setComment] = useState('');

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewComment({ postId: {_id: id}, content: comment }));
    setComment('');
  };

  const handleDelete = (commentId) => {
    dispatch(deleteComment({ postId: id, commentId }));
  };

  const handleLike = () => {
    dispatch(likePost(id));
  };

  const handleDislike = () => {
    dispatch(dislikePost(id));
  };

  const error = useSelector((state) => state.auth.error);

  if (!post || user == null) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Spinner animation="border" />
      </Container>
    );
  }
  
  const hasLiked = post.likedBy && user && post.likedBy.includes(user._id);
  const hasDisliked = post.dislikedBy && user && post.dislikedBy.includes(user._id);

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
          <Button variant="success" onClick={handleLike} disabled={!isAuthenticated}>
            {hasLiked ? 'Unlike' : 'Like'}
          </Button>
          <div className="ml-2">{post.likes - post.dislikes}</div>
          <Button variant="danger" onClick={handleDislike} disabled={!isAuthenticated}>
            {hasDisliked ? 'Undislike' : 'Dislike'}
          </Button>
          <Card.Footer>
            {post.comments.map(comment => (
              <Comment key={comment._id} comment={comment} onDelete={handleDelete} isAdmin={user.role === 'admin'} />
            ))}
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