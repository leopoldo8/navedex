import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import appContext from '@contexts/appContext';

import Loader from '@components/atoms/Loader';
import { useModal } from '@components/organisms/Modal';
import { DefaultModalContent } from '@components/organisms/Modal/style';

import NaversService from '@api/services/navers';

import {
  Container,
  Content,
  Image,
  InfoWrapper,
  Name,
  Subtitle,
  Info,
  Actions
} from './style';

const NaverModal = () => {
  const [data, setData] = useState(null);

  const history = useHistory();
  const { state } = useContext(appContext);
  const { isOpen, close } = useModal('NaverModal');
  const { options } = state.modal;

  useEffect(() => {
    setData(null);
    async function getNaver(id) {
      const response = await NaversService.show(id);

      if (response.status === 200) {
        const newData = response.data
        newData.birthdate = new Date(newData.birthdate).toLocaleDateString();
        newData.admission_date = new Date(newData.admission_date).toLocaleDateString();

        setData(newData);
      }
    }

    if (isOpen && options && options.id) getNaver(options.id);
  }, [options, isOpen]);

  const goTo = (path) => {
    history.push(path);
    close();
  }

  const content = () => {
    return (
      <Content>
        <Image src={data.url} />
        <InfoWrapper>
          <Info>
            <Name>{ data.name }</Name>
            <p>{ data.job_role }</p>
            <Subtitle>Idade</Subtitle>
            <p>{ data.birthdate }</p>
            <Subtitle>Tempo de empresa</Subtitle>
            <p>{ data.admission_date }</p>
            <Subtitle>Projetos que participou</Subtitle>
            <p>{ data.project }</p>
          </Info>
          <Actions>
            <i className="icon-delete" onClick={() => history.push(`/navers/${data.id}/delete`)} />
            <i className="icon-edit" onClick={() => goTo(`/navers/${data.id}/edit`)} />
          </Actions>
        </InfoWrapper>
      </Content>
    );
  }

  if (options && options.id)
    return (
      <DefaultModalContent large isOpened={isOpen} noPadding>
        <i className="icon-close" onClick={() => close()} />
        <Container>
          {data === null
            ? <Loader theme="dark" size="large" />
            : content()
          }
        </Container>
      </DefaultModalContent>
    );

  return null;
}

export default NaverModal;
