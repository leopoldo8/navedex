import React, { useState, useEffect } from 'react';

import { pause } from '@modules/utils';

import {
  Container,
  Text
} from './style';

/**
 * The EmptyNaversPlaceholder is used to warn the user that the navers list is empty
 */
const EmptyNaversPlaceholder = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function triggerAnimation() {
      await pause(0.2);
      setLoaded(true);
    }

    triggerAnimation();
  }, []);

  return (
    <Container loaded={loaded}>
      <i className="icon-notice" />
      <Text>Você não tem nenhum naver adicionado</Text>
    </Container>
  );
}

export default EmptyNaversPlaceholder;
