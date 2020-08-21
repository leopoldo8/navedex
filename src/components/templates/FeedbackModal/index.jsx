import React, { useContext } from 'react';

import appContext from '@contexts/appContext';

import { useModal } from '@components/organisms/Modal';

import { DefaultModalContent } from '@components/organisms/Modal/style';

import {
  Title
} from './style';

const FeedbackModal = () => {
  const { state } = useContext(appContext);
  const { isOpen, close } = useModal('FeedbackModal');

  const { options } = state.modal;

  if (options && options.title && options.description)
    return (
      <DefaultModalContent isOpened={isOpen}>
        <i className="icon-close" onClick={() => close()} />
        <Title>{ options.title }</Title>
        <p>{ options.description }</p>
      </DefaultModalContent>
    );

  return null;
}

export default FeedbackModal;
