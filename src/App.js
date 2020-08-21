import React from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Router from './router';

import { AppProvider } from '@contexts/appContext';
import { UserProvider } from '@contexts/userContext';

import AuthService from '@api/services/auth';

import Topbar from '@components/atoms/Topbar';
import { Modal } from '@components/organisms/Modal';

import FeedbackModal from '@components/templates/FeedbackModal';
import NaverModal from '@components/templates/NaverModal';
import ConfirmModal from '@components/templates/ConfirmModal';

import GlobalStyles from '@modules/globalStyles';

const Navedex = () => {

  return (
    <>
      <GlobalStyles />
      <AppProvider>
        <Modal>
          <FeedbackModal />
          <NaverModal />
          <ConfirmModal />
        </Modal>
        <ToastContainer transition={Slide} />
        <UserProvider>
          {AuthService.token && <Topbar />}
          <Router />
        </UserProvider>
      </AppProvider>
    </>
  );
};

export default Navedex;
