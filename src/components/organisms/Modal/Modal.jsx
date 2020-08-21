import React, { useContext, useEffect } from 'react';

import AppContext from '@contexts/appContext';

import {
  Container,
  Background,
} from './style';

const Modal = ({ children }) => {
  const { state, dispatch } = useContext(AppContext);
  const { isOpened, options } = state.modal;

  const handleBackgroundClick = () => {
    if (options && options.disableBackgroundClose) {
      return false;
    };

    return dispatch({ type: 'CLOSE_MODAL' });
  };

  useEffect(() => {
    const scroll = window.scrollY;

    function disableScroll() {
      const { body } = document;
      body.style.position = 'fixed';
      body.style.top = `-${scroll}px`;
      body.style.right = '0px';
      body.style.left = '0px';
      body.style.overflow = 'hidden';
    }

    function enableScroll() {
      const { body } = document;
      const { top } = body.style;
      const yValue = -parseInt(top || '0', 10);
      body.style.position = '';
      body.style.top = '';
      body.style.right = '';
      body.style.left = '';
      body.style.overflow = '';
      window.scrollTo(0, yValue);
    }


    if (isOpened) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [isOpened]);

  return (
    <Container isOpened={isOpened}>
      <Background onClick={() => handleBackgroundClick()} isOpened={isOpened} />
      {children}
    </Container>
  );
};

export default Modal;
