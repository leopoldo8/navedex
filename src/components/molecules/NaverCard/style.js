import styled from 'styled-components';

import { LargeLabel, Paragraph } from '@assets/styles/typography';
import { Gray900, White } from '@assets/styles/colors';

export const Card = styled.div`
  width: 280px;
  height: 376px;
  display: flex;
  flex-flow: column nowrap;
  padding: 16px;
  transition: transform .3s ease-in-out;
  transform: scale(1);

  &:hover {
    transform: scale(1.03) rotate(0.01deg);
  }
`;

export const Wrapper = styled.div`
  cursor: pointer;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 280px;
  margin-bottom: 16px;
`;

export const NaverName = styled.p`
  ${LargeLabel}
  color: ${Gray900};
  margin-bottom: 4px;
`;

export const NaverJob = styled.p`
  ${Paragraph};
  color: ${Gray900};
  margin-bottom: 10px;
`;

export const Actions = styled.div`
  display: flex;
  flex-flow: row nowrap;

  i {
    cursor: pointer;
    font-size: 24px;
    border-radius: 50%;
    padding: 4px;
    margin-right: 4px;
    background: ${White};
    transition: background .2s ease-in-out;

    &:hover {
      background: rgba(0, 0, 0, .15);
    }
  }
`;
