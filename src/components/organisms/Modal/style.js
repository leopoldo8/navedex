import styled from 'styled-components';
import { White } from '@assets/styles/colors';
import { LargeElevation } from '@assets/styles/elevations';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  z-index: 100;
  visibility: ${props => (props.isOpened ? 'visible' : 'hidden')};
  opacity: ${props => (props.isOpened ? 1 : 0)};
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: -1;
  opacity: ${props => (props.isOpened ? 1 : 0)};
  transition: all .4s;
`;

export const DefaultModalContent = styled.div`
  ${LargeElevation}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ${props => (props.isOpened ? 'scale(1)' : 'scale(0.95)')};
  max-width: ${props => props.large ? `1007px` : `592px`};
  width: 90%;
  box-sizing: border-box;
  ${props => !props.noPadding && `
    padding: 32px;
  `}
  background: ${White};
  transition: 0.1s ease-in;

  i.icon-close {
    font-size: 24px;
    position: absolute;
    top: ${props => props.large ? `16px` : `24px`};
    right: ${props => props.large ? `16px` : `24px`};
    cursor: pointer;
  }
`;
