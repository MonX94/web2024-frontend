import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Posts from './components/Posts';
import PostItem from './components/PostItem';
import CreatePost from './components/CreatePost';
import { fetchPosts } from './actions/postActions';
import { loadUser } from './actions/authActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts/:id" element={<PostItem />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
};

export default App;
