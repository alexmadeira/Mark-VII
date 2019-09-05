import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #333333;
  min-height: 100px;
  padding: 20px;
  color: #ffffff;
  position: relative;
  z-index: 10;
  flex-wrap: wrap;
  flex-direction: row;
`;
export const Paragrafo = styled.p`
  @media (max-width: 720px) {
    text-align: center;
  }
`;
export const Social = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  height: 100%;
  flex: 1;
  margin-top: 10px;
  @media (max-width: 720px) {
    justify-content: center;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    &:last-child {
      margin-right: 0;
    }
    a {
      color: #ffffff;
      font-size: 20px;
      -webkit-transition: color 0.2s ease-out;
      -moz-transition: color 0.2s ease-out;
      -o-transition: color 0.2s ease-out;
      transition: color 0.2s ease-out;
      &:hover {
        &.facebook {
          color: #3b5998;
        }
        &.instagram {
          color: #945647;
        }
      }
    }
  }
`;
