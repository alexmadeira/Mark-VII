import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  padding-top: 15px;
  padding-bottom: 15px;
  background: #fff;
  @media (max-width: 490px) {
    padding-top: 5px;
  }
`;
