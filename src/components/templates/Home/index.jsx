import React, { useEffect, useCallback, useContext } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import appContext from '@contexts/appContext';

import Button from '@components/atoms/Button';
import Navers from '@components/organisms/Navers';
import { useModal } from '@components/organisms/Modal';

import NaversService from '@api/services/navers';

import {
  Container,
  TopContainer,
  Title,
  ButtonContainer
} from './style';

const HomeTemplate = () => {
  const { dispatch } = useCallback(useContext(appContext), []);
  const history = useCallback(useHistory(), []);

  const location = useLocation();
  const isDelete = location.pathname.includes('/delete');

  const { open, close } = useCallback(useModal('ConfirmModal'), []);
  const { open: openFeedBack } = useCallback(useModal('feedbackModal'), []);
  const { id } = useParams();

  useEffect(() => {
    function openConfirmDelete() {
      NaversService.deactivateHandleErrorOnce = true;
      NaversService.show(id)
        .then(() => {
          open({
            options: {
              title: 'Excluir Naver',
              description: 'Tem certeza que deseja excluir este Naver?',
              disableBackgroundClose: true,
              onConfirm: async () => {
                dispatch({
                  type: 'SET_MODAL_OPTIONS',
                  payload: {
                    loading: true
                  }
                });
                const response = await NaversService.remove(id);

                if (response.status === 200) {
                  openFeedBack({
                    options: {
                      title: 'Naver excluído',
                      description: 'Naver excluído com sucesso!'
                    }
                  });
                  dispatch({ type: 'REFRESH_INDEX' });
                  history.push('/navers');
                }
              },
              onCancel: () => {
                history.push('/navers');
                close();
              }
            }
          });
        })
        .catch((e) => {
          if (e.response.status === 404) {
            history.push('/navers');
            toast.error('Naver não encontrado');
          }
        });
    }

    if (isDelete) openConfirmDelete();
  }, [id, isDelete, history, open, close, openFeedBack, dispatch]);

  return (
    <Container>
      <TopContainer>
        <Title>Navers</Title>
        <ButtonContainer>
          <Button label="Adicionar Naver" onClick={() => history.push('/navers/add')} />
        </ButtonContainer>
      </TopContainer>
      <Navers />
    </Container>
  );
}

export default HomeTemplate;
