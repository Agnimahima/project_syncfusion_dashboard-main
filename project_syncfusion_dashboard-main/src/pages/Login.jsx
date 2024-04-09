import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f2f2f2;
`;

const FormContainer = styled.div`
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;
  flex: 0 0 100px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const SubmitBtn = styled.button`
  padding: 10px;
  background: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Predefined username and password for validation
    const adminUsername = 'admin';
    const adminPassword = 'password';

    if (username === adminUsername && password === adminPassword) {
      // Password matches, login successful
      console.log('Login successful');
      // Redirect to other options
      // Replace '/other-options' with the desired path
      window.location.href = '/home';
    } else {
      // Invalid username or password
      console.log('Invalid username or password');
      // Display an error message or perform any other action
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="username">Username:</Label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </InputGroup>
          <SubmitBtn type="submit" disabled={!username || !password}>
            Submit
          </SubmitBtn>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Login;
