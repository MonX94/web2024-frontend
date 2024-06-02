import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Register from './components/Register';
import Login from './components/Login';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import PostItem from './components/PostItem';
import AppNavbar from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id" element={<PostItem />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
