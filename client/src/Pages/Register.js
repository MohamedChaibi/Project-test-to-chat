import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Register.css'; // Import the CSS file
import { register } from '../JS/Actions/user';

const Register = () => {
  const [newUser, setNewUser] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="register-container">
      <h2>Register User</h2>
      <Form.Label className="form-label">Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Name"
        name="name"
        onChange={handleChange}
      />
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
      <Form.Label className="form-label">Phone</Form.Label>
      <Form.Control
        type="Number"
        placeholder="Enter Phone"
        name="phone"
        onChange={handleChange}
      />
      <Link to="/profile">
        <Button
          variant="primary"
          type="submit"
          onClick={() => dispatch(register(newUser))}
        >
          Register
        </Button>
      </Link>
     
    </div>
  );
};

export default Register;
