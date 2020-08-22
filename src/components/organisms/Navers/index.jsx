import React, { useState, useEffect, useContext } from 'react';

import appContext from '@contexts/appContext';

import { useModal } from '@components/organisms/Modal';
import NaverCard from '@components/molecules/NaverCard';
import CardPlaceholder from '@components/atoms/CardPlaceholder';
import EmptyNaversPlaceholder from '@components/atoms/EmptyNaversPlaceholder';

import NaversService from '@api/services/navers';

import { pause } from '@modules/utils';

import { Container, CardContainer } from './style';

/**
 * The Navers organism manages a group of NaverCard component.
 * It requests to Navers index API and map it response to NaverCard components.
 */
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

  const content = () => {
    if (data === null)
      return <LoadingContent />;

    if (data.length === 0)
      return <EmptyNaversPlaceholder />;

    return data.map(naver =>
      <NaverCard info={naver} key={naver.id} onClick={() => showNaver(naver.id)} />
    );
  }

  return (
    <Container>
      {content()}
    </Container>
  )
}

export default Navers;
