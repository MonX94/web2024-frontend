import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Posts from './components/Posts';
import PostItem from './components/PostItem';
import CreatePost from './components/CreatePost';
import { loadUser } from './actions/authActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.token) {
      dispatch(loadUser());
    }
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts/:id" element={<PostItem />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </>
  );
};

export default App;
