import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const Preload = styled.img`
  position: absolute;
  left: -2%;
  top: -2%;
  height: 104%;
  width: 104%;
  object-fit: cover;
  filter: blur(5px);
  opacity: 1;
  transition: all 2s;
  &.hidden {
    opacity: 0;
  }
`;

export const Content = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;
  object-fit: cover;
`;
