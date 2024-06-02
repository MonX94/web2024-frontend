import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={onSubmit}>
        <input type="email" name="email" value={email} onChange={onChange} required />
        <input type="password" name="password" value={password} onChange={onChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
