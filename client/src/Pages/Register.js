import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"

const Register = () => {
  const [newUser, setNewUser] = useState({})  
  const dispatch = useDispatch()
  
  const handleChange = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value});
  }
  return (
    <div>
      <h2>Register User</h2>
      <Form.Label>Name</Form.Label>
          <Form.Control 
              type="text" 
              placeholder="Enter Name" 
              name="name" 
              onChange={handleChange} 
              />
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email" 
        name="email" 
        onChange={handleChange} 
        />
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter Password" 
        name="password" 
        onChange={handleChange}
        />
        <Form.Label>Phone</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter Phone" 
        name="phone" 
        onChange={handleChange}
        />
        <Link to='/profile'>
        <Button 
        variant="primary" 
        type="submit" 
        onClick={ () => dispatch(Register(newUser))}>
        Register
        </Button>
        </Link>
        
    </div>
  )
}

export default Register

