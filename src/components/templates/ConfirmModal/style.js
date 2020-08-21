import styled from 'styled-components';

import { SmallDisplay } from '@assets/styles/typography';
import { Gray900 } from '@assets/styles/colors';

export const Title = styled.h1`
  ${SmallDisplay}
  color: ${Gray900};
  margin-bottom: 30px;
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 376px;
  margin-left: auto;
  margin-top: 32px;

  button {
    width: 176px;
  }
`;
