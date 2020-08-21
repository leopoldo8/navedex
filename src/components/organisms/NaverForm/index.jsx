import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router-dom';

import Loader from '@components/atoms/Loader';
import { useModal } from '@components/organisms/Modal';

import NaversService from '@api/services/navers';

import NaverFields from '@components/molecules/NaverFields';

import {
  Container,
  SubTitle,
  TopContainer,
  LoaderWrapper
} from './style';

const NaverForm = ({ type }) => {
  const [loaded, setLoaded] = useState(false);

  const [loading, setLoading] = useState(false);
  const [initialData, setInitialData] = useState(null);

  const history = useCallback(useHistory(), []);
  const { id } = useParams();
  const { open } = useModal('FeedbackModal');

  const dictionary = {
    create: "Adicionar Naver",
    edit: "Editar Naver"
  };
  const title = dictionary[type];

  useEffect(() => setLoaded(true), []);

  useEffect(() => {
    async function getNaver() {
      try {
        NaversService.deactivateHandleErrorOnce = true;
        const response = await NaversService.show(id);

        if (response.status === 200) {
          const newData = response.data
          newData.birthdate = new Date(newData.birthdate).toLocaleDateString();
          newData.admission_date = new Date(newData.admission_date).toLocaleDateString();

          setInitialData(newData);
        }
      } catch (e) {
        if (e.response.status === 404) {
          history.push('/navers');
          toast.error('Naver não encontrado');
        }
      }
    }

    if (type === 'edit')
      getNaver();
  }, [id, type, history]);

  const handleSubmit = (...props) => {
    if (type === 'edit') {
      editNaver(...props);
    } else {
      createNaver(...props);
    }
  }

  const editNaver = async (data) => {
    setLoading(true);
    const response = await NaversService.update(id, data);
    setLoading(false);

    if (response.status === 200) {
      open({options: {
        title: 'Naver atualizado',
        description: 'Naver atualizado com sucesso!'
      }});
    }
  }

  const createNaver = (data, { resetForm }) => {
    setLoading(true);
    NaversService.create(data)
      .then(response => {
        if (response.status === 200) {
          console.log(resetForm);
          resetForm({});
          open({options: {
            title: 'Naver criado',
            description: 'Naver criado com sucesso!'
          }});
        }
      }).finally(() => {
        setLoading(false);
      });
  }

  const content = () => {
    if (type === 'edit' && initialData === null) {
      return (
        <LoaderWrapper>
          <Loader theme="dark" size="large" />
        </LoaderWrapper>
      );
    }

    return (
      <NaverFields
        onSubmit={handleSubmit}
        loading={loading}
        initialData={initialData}
        shouldResetOnSubmit={type === 'create'}
      />
    );
  }

  return (
    <Container loaded={loaded}>
      <TopContainer>
        <i className="icon-arrow" onClick={() => history.goBack()} />
        <SubTitle>{ title }</SubTitle>
      </TopContainer>
      {content()}
    </Container>
  );
}

NaverForm.propTypes = {
  type: PropTypes.oneOf(['create', 'edit']).isRequired
}

export default NaverForm;
