import styled from 'styled-components';
import { Paragraph, Label as LabelTypo } from '@assets/styles/typography';
import { Gray500, Gray800, Gray900, Error, White } from '@assets/styles/colors';

export const Input = styled.input`
  ${Paragraph}
  height: ${props => {
    switch (props.size) {
      default:
      case 'medium':
        return '40px';
      case 'large':
        return '48px';
    }
  }};
  background: ${White};
  outline: 0;
  padding: 0 8px;
  width: 100%;
  border: 1px solid ${Gray800};
  box-sizing: border-box;

  ${props => props.error && `
    border: 1px solid ${Error};
  `}

  &::placeholder {
    color: ${Gray500};
  }
`;

export const ErrorLabel = styled.p`
  margin-top: 8px;
  ${Paragraph}
  color: ${Error};
  line-height: 16px;
`;

export const Label = styled.label`
  ${LabelTypo}
  color: ${Gray900};
  margin-bottom: 4px;
  display: block;
`;
