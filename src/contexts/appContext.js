import React, { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  modal: {
    isOpened: false,
    options: null,
    component: null
  },
  shouldRefreshIndex: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        modal: {
          isOpened: true,
          component: action.component,
          options: action.options
        },
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpened: false,
        },
      };

    case 'SET_MODAL_OPTIONS':
      return {
        ...state,
        modal: {
          ...state.modal,
          options: {
            ...state.modal.options,
            ...action.payload
          }
        }
      }

    case 'REFRESH_INDEX':
      return {
        ...state,
        shouldRefreshIndex: state.shouldRefreshIndex + 1
      };

    default:
      return state;
  }
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppProvider };
export default AppContext;
