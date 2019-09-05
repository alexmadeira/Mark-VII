import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #a1d7f0;
  height: calc(100vw * (577 / 1140));
  position: relative;
  overflow: hidden;
  a {
    color: #a1d7f0;
    font-size: 0px;
    text-decoration: none;
  }
`;

export const Link = styled.a`
  display: block;
  height: 100%;
  width: 100%;
`;

export const ImageFull = styled.img`
  width: 110%;
  min-width: 100%;
`;
