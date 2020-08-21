import React, { useContext } from 'react';

import appContext from '@contexts/appContext';

import Button from '@components/atoms/Button';
import { useModal } from '@components/organisms/Modal';

import { DefaultModalContent } from '@components/organisms/Modal/style';

import {
  Title, Row
} from './style';

const ConfirmModal = () => {
  const { state } = useContext(appContext);
  const { isOpen, close } = useModal('ConfirmModal');

  const { options } = state.modal;

  const handleCancel = (e) => {
    if (options.onCancel) {
      options.onCancel(e);
    } else {
      close();
    }
  }

  if (options && options.title && options.description && options.onConfirm)
    return (
      <DefaultModalContent isOpened={isOpen}>
        <Title>{ options.title }</Title>
        <p>{ options.description }</p>
        <Row>
          <Button schema="outline" label={options.cancelLabel || 'Cancelar'} onClick={handleCancel} />
          <Button label={options.confirmLabel || 'Confirmar'} onClick={options.onConfirm} loading={options.loading} />
        </Row>
      </DefaultModalContent>
    );

  return null;
}

export default ConfirmModal;
