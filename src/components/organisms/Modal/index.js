import { useContext } from 'react';
import appContext from '@contexts/appContext';
import Modal from './Modal';

function useModal(modalName) {
  const { state, dispatch } = useContext(appContext);

  return {
    isOpen: state.modal.component === modalName,
    close: () => dispatch({ type: 'CLOSE_MODAL' }),
    open: (options) => dispatch({ type: 'OPEN_MODAL', component: modalName, ...options })
  };
}

export { useModal, Modal };
