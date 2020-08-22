import styled from 'styled-components';

import { SmallDisplay, Paragraph } from '@assets/styles/typography';
import { Black, Gray900, White } from '@assets/styles/colors';

export const Container = styled.div`
  min-height: 503px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
`;

export const Image = styled.img`
  flex: 1;
  height: 503px;
`;

export const InfoWrapper = styled.div`
  flex: 1;
  height: 503px;
  display: flex;
  flex-flow: column nowrap;
  padding: 32px 32px 24px;
  box-sizing: border-box;
  align-content: space-between;
`;

export const Name = styled.h1`
  ${SmallDisplay}
  color: ${Black};
  margin-bottom: 10px;
`;

export const Subtitle = styled.h3`
  ${Paragraph}
  font-weight: bold;
  color: ${Gray900};
  margin-top: 24px;
  margin-bottom: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const Actions = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: auto;

  i {
    font-size: 24px;
    cursor: pointer;
    border-radius: 50%;
    padding: 4px;
    margin-right: 4px;
    background: ${White};
    transition: background .2s ease-in-out;

    &:hover {
      background: rgba(0, 0, 0, .25);
    }
  }
`;
