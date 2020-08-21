import styled from 'styled-components';

import { FadeInFromTop } from '@assets/styles/transitions';
import { Display } from '@assets/styles/typography';
import { Gray900 } from '@assets/styles/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0 16px 32px;
  box-sizing: border-box;

  ${props => FadeInFromTop(props.loaded)}
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  ${Display}
  color: ${Gray900};
`;

export const ButtonContainer = styled.div`
  width: 176px;
`;
