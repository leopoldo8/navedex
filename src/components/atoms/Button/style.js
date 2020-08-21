import styled from 'styled-components';
import { darken } from 'polished';

import { Gray900, White } from '@assets/styles/colors';
import { Label } from '@assets/styles/typography';

const background = Gray900;

const getColorsBySchema = schema => {
  if (schema === 'outline')
    return {
      color: Gray900,
      background: White
    }

  return {
    color: White,
    background
  }
}

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  border: 0;
  outline: 0;
  width: 100%;
  cursor: pointer;
  transition: .2s;

  ${Label}

  ${props => `
    color: ${getColorsBySchema(props.schema).color};
    background: ${getColorsBySchema(props.schema).background};
  `}

  border: ${props => props.schema === 'outline' ? `1px solid ${Gray900}` : `0`};

  ${props => props.loading ?
  `
    pointer-events: none;
  ` : `
    &:hover, &:focus {
      background: ${darken(.04, getColorsBySchema(props.schema).background)}
    }
  `}

  &:active {
    background: ${props => darken(.08, getColorsBySchema(props.schema).background)}
  }
`;
