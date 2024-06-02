import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/authActions';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = formData;

  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={onSubmit}>
        <input type="text" name="username" value={username} onChange={onChange} required />
        <input type="email" name="email" value={email} onChange={onChange} required />
        <input type="password" name="password" value={password} onChange={onChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
