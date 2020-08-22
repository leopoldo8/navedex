import React from 'react';
import styled from 'styled-components';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from '@components/pages/Home';
import Login from '@components/pages/Login';
import CreateNaver from '@components/pages/CreateNaver';
import EditNaver from '@components/pages/EditNaver';
import NotFound from '@components/pages/NotFound';

import AuthService from '@api/services/auth';

import { White } from '@assets/styles/colors';

function ProtectedRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        AuthService.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


function AuthRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !AuthService.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/navers",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const PagesContainer = styled.div`
  width: 100%;
  background: ${White};
  ${props => !props.hasTopbar && `
    height: 100%;
  `}
`;

const RouterConfig = () => (
  <PagesContainer hasTopbar={AuthService.token}>
    <Switch>
      <AuthRoute exact path="/">
        <Login />
      </AuthRoute>
      <ProtectedRoute exact path={["/navers", "/navers/:id/delete"]}>
        <Home />
      </ProtectedRoute>
      <ProtectedRoute exact path="/navers/add">
        <CreateNaver />
      </ProtectedRoute>
      <ProtectedRoute exact path="/navers/:id/edit">
        <EditNaver />
      </ProtectedRoute>
      <Route component={NotFound} />
    </Switch>
  </PagesContainer>
);

export default RouterConfig;
