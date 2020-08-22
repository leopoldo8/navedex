import styled from 'styled-components';

import { SmallDisplay } from '@assets/styles/typography';
import { FadeIn } from '@assets/styles/transitions';
import { Gray500 } from '@assets/styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  user-select: none;

  ${props => FadeIn(props.loaded)}

  i {
    font-size: 56px;
    color: ${Gray500};
  }
`;

export const Text = styled.div`
  ${SmallDisplay}
  color: ${Gray500};
`;
