import styled from 'styled-components';

export const Container = styled.main`
  background: #ffffff;
  min-height: calc(100vh - 100px);
  position: relative;
`;

export const Crooked = styled.div`
  -webkit-box-shadow: 0px 0px 42px 12px rgba(90, 90, 90, 0.7);
  -moz-box-shadow: 0px 0px 42px 12px rgba(90, 90, 90, 0.7);
  box-shadow: 0px 0px 42px 12px rgba(90, 90, 90, 0.7);
  background: #fff;

  @media (min-width: 992px) {
    transform: translate(-50%, 0) rotate(-5deg);
    width: 120vw;
    margin-top: -120px;
    position: relative;
    left: 50%;
  }
`;
export const Center = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: transparent;
  flex-wrap: wrap;
`;

export const Basic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 250px;
  padding: 30px;
  margin-top: ${props => props.top || '0px'};
  ${props => (props.reverse ? 'transform: rotate(5deg)' : '')};
  @media (max-width: 992px) {
    transform: rotate(0deg) !important;
  }
  h3 {
    font-size: 30px;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
    margin-bottom: 10px;
  }
  p {
    font-size: 20px;
    margin-bottom: 10px;
  }
  figure {
    width: 83%;
    img {
      max-width: 100%;
    }
  }
`;
