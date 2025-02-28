import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Login.css'; // Make sure to import your CSS file
import { login } from '../JS/Actions/user';

const Login = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <Form>
        <Form.Label className="form-label">Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          name="email" 
          onChange={handleChange}
        />
        
        <Form.Label className="form-label">Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Enter Password" 
          name="password" 
          onChange={handleChange}
        />
        
        <Link to="/profile">
          <Button variant="primary" type="submit" className="btn-primary" onClick={()=> dispatch(login(user))}>
            Login
          </Button>
        </Link>
        
        <div className="link">
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
      </Form>
    </div>
  );
};

export default Login;
