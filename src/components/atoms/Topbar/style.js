import styled from 'styled-components';

import { Label } from '@assets/styles/typography';
import { Black } from '@assets/styles/colors';

export const Container = styled.div`
  height: 85px;
  width: 100%;
  box-sizing: border-box;
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  i {
    font-size: 37px;
    cursor: pointer;
    color: ${Black};
  }
`;

export const Logout = styled.p`
  ${Label}
  color: ${Black};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
