import React, { useState, useEffect, useContext } from 'react';

import appContext from '@contexts/appContext';

import { useModal } from '@components/organisms/Modal';
import NaverCard from '@components/molecules/NaverCard';
import CardPlaceholder from '@components/atoms/CardPlaceholder';

import NaversService from '@api/services/navers';

import { pause } from '@modules/utils';

import { Container, CardContainer } from './style';

const Navers = () => {
  const { open } = useModal('NaverModal');
  const { state } = useContext(appContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getNavers() {
      const response = await NaversService.index();

      if (response.status === 200) {
        await pause(1);
        setData(response.data);
      }
    }

    getNavers();
  }, [state.shouldRefreshIndex]);

  const showNaver = (id) => {
    open({
      options: {
        id
      }
    });
  }

  const CardLoader = () => (
    <CardContainer>
      <CardPlaceholder />
    </CardContainer>
  );

  const LoadingContent = () => (
    <>
      <CardLoader />
      <CardLoader />
      <CardLoader />
      <CardLoader />
    </>
  );

  return (
    <Container>
      {data === null ? (
        <LoadingContent />
      ) : data.map(naver =>
        <NaverCard info={naver} key={naver.id} onClick={() => showNaver(naver.id)} />
      )}
    </Container>
  )
}

export default Navers;
