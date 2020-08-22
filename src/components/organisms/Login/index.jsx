import React, { useContext, useState } from 'react';

import LoginCard from '@components/molecules/LoginCard';

import AuthService from '@api/services/auth';

import UserContext from '@contexts/userContext';

import { Container } from './style';

/**
 * The Login organism manages the login card component.
 * It requests to auth API and manage the user's authorization in the application
 */
const Login = () => {
  const [loading, setLoading] = useState(false);

  const { login } = useContext(UserContext);

  const handleEnterSubmit = async (data) => {
    setLoading(true);
    const response = await AuthService.login(data);
    setLoading(false);

    if (response.status === 200) {
      login(response.data);
      window.location.assign('/navers');
    }
  }

  return (
    <Container>
      <LoginCard handleEnterSubmit={handleEnterSubmit} loading={loading} />
    </Container>
  )
}

export default Login;
