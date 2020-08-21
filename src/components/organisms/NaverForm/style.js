import styled from 'styled-components';

import { SmallDisplay } from '@assets/styles/typography';
import { Gray900 } from '@assets/styles/colors';

export const Container = styled.div`
  width: 592px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: 32px;

  i {
    font-size: 24px;
    margin-right: 16px;
    cursor: pointer;
  }
`;

export const SubTitle = styled.h1`
  ${SmallDisplay}
  color: ${Gray900};
`;

export const ButtonContainer = styled.div`
  width: 176px;
`;

export const LoaderWrapper = styled.div`
  margin: 0 auto;
`;
