import styled from 'styled-components';
import { Gray900 } from '@assets/styles/colors';

export const FieldContainer = styled.div`
  ${props => props.error ? `
    margin-bottom: 8px;
  ` : `
    margin-bottom: 32px;
  `}
  width: 100%;
`;

export const FormContainer = styled.form`
  width: 448px;
  height: 408px;
  border: 1px solid ${Gray900};
  box-sizing: border-box;
  padding: 40px 32px;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  transition: transform .4s cubic-bezier(.52,.96,.11,1.37), opacity .5s;
  transform: scale(0.4);
  opacity: 0.2;

  ${props => props.loaded && `
    transform: scale(1);
    opacity: 1;
  `}

  .icon-logo {
    font-size: 60px;
    margin-bottom: 40px;
    display: inline-block;
  }
`;
