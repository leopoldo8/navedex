import React, { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';

import AuthService from '@api/services/auth';

const initialState = {
  isAuthenticated: false,
  info: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        info: action.payload
      };

    case 'SET_AUTH':
      return {
        ...state,
        isAuthenticated: !!action.payload
      };

    default:
      return state;
  }
};

const UserContext = createContext(initialState);

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = (data) => {
    const { token, ...info } = data;
    AuthService.setCredentials(token);

    dispatch({
      type: 'SET_AUTH',
      payload: true
    });

    dispatch({
      type: 'SET_USER',
      payload: info
    });
  }

  const logout = () => {
    AuthService.resetCredentials();
    window.location.reload();
  }

  return <UserContext.Provider value={{ state, login, logout }}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { UserProvider, initialState };
export default UserContext;
