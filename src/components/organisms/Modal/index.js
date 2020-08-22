import { useContext } from 'react';
import appContext from '@contexts/appContext';
import Modal from './Modal';

/**
 * The useModal is a hook to get the actions and info about a Modal Component.
 * You will use it to initialize a modal and to open it in a different component.
 * To create a modal this way, you will need to put it at App.js, inside <Modal> component.
 */
function useModal(modalName) {
  const { state, dispatch } = useContext(appContext);

  return {
    isOpen: state.modal.component === modalName,
    close: () => dispatch({ type: 'CLOSE_MODAL' }),
    open: (options) => dispatch({ type: 'OPEN_MODAL', component: modalName, ...options })
  };
}

export { useModal, Modal };
