import styled, { keyframes } from 'styled-components';

const entradaTop = keyframes`
  0% { martop: 200px; opacity: 0; }
  40% { top: 200px; opacity: 0;}
  50% { opacity: 0; }
  100% { top: 0px; opacity: 1; }
`;

export const Header = styled.header`
  height: 100vh;
  flex: 1;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: ${props => (props.bgColor ? `${props.bgColor}` : '#ffffff')};
  @media (max-width: 914px) {
    flex-direction: column;
  }
  @media (max-width: 480px) {
    height: 65vh;
  }
  & > * {
    position: relative;
    z-index: 1;
  }

  .logo {
    margin-top: 100px;
    -webkit-transform: translateX(0) rotate(-25deg);
    -moz-transform: translateX(0) rotate(-25deg);
    -o-transform: translateX(0) rotate(-25deg);
    transform: translateX(0) rotate(-25deg);
    transition: all 0.5s;
    filter: drop-shadow(0px 0px 10px #000000);
    position: absolute;
    &:hover {
      -webkit-transform: translateX(0) rotate(0deg);
      -moz-transform: translateX(0) rotate(0deg);
      -o-transform: translateX(0) rotate(0deg);
      transform: translateX(0) rotate(0deg);
      filter: drop-shadow(0px 20px 10px #000000);
    }
    @media (max-width: 480px) {
      -webkit-transform: translateX(0) rotate(0deg);
      -moz-transform: translateX(0) rotate(0deg);
      -o-transform: translateX(0) rotate(0deg);
      transform: translateX(0) rotate(0deg);
    }
  }
  .ProjetDescriptionBox {
    position: absolute;
    right: 30px;
    bottom: -20px;
  }
  @media (max-width: 1190px) {
    height: 70vh;
  }
  @media (max-width: 745px) {
    height: 55vh;
  }
`;

export const ProjetDescriptionBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
  position: relative;
  height: 100%;
  animation: ${entradaTop} 2s;
`;

export const ProjetDescription = styled.div`
  margin-bottom: 150px;
  margin-right: 15px;
  background: #fff;
  border: 3px solid #000;
  padding: 10px;
  max-width: 500px;
  flex: 1;
  width: 100%;
  @media (max-width: 914px) {
    max-width: calc(100% - 30px);
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 0;
  }

  h2 {
    font-size: 25px;
    font-weight: normal;
    text-align: center;
  }
`;

export const Container = styled.div`
  position: relative;
  padding: 15px;
  margin-bottom: -1px;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  background: linear-gradient(transparent 0%, rgba(0, 0, 0, 1) 50%);
  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;

export const AgencyBox = styled.div`
  display: flex;
  position: relative;
  margin: 15px;
  height: 500px;
  width: calc(33.33% - 30px);
  min-width: 320px;
  max-width: 100%;

  animation: ${entradaTop} 1.6s;
  img {
    border: 1px solid #ffffff;
  }
  @media (max-width: 1190px) {
    width: calc(50% - 30px);
  }
  @media (max-width: 745px) {
    width: calc(100% - 30px);
  }
`;

export const AgencyDescriptionBox = styled.div`
  z-index: 4;
`;

export const AgencyDescription = styled.div`
  background: #fff;
  border: 3px solid #000;
  padding: 10px;
  position: absolute;
  right: 0;
  top: -50px;
  width: 70%;
  z-index: 2;

  h2 {
    margin-top: 10px;
    text-align: left;
    border-bottom: 1px solid #000;
  }

  @media (max-width: 914px) {
    top: initial;
    bottom: 100%;
    width: 100%;
    padding: 0;
    border: none;
    p,
    & > h2 {
      display: none;
    }
  }

  background: #ffffff;
  background: -moz-linear-gradient(
    top,
    #ffffff 0%,
    #ffffff 62%,
    rgba(255, 255, 255, 0.65) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, #ffffff),
    color-stop(62%, #ffffff),
    color-stop(100%, rgba(255, 255, 255, 0.65))
  );
  background: -webkit-linear-gradient(
    top,
    #ffffff 0%,
    #ffffff 62%,
    rgba(255, 255, 255, 0.65) 100%
  );
  background: -o-linear-gradient(
    top,
    #ffffff 0%,
    #ffffff 62%,
    rgba(255, 255, 255, 0.65) 100%
  );
  background: -ms-linear-gradient(
    top,
    #ffffff 0%,
    #ffffff 62%,
    rgba(255, 255, 255, 0.65) 100%
  );
  background: linear-gradient(
    to bottom,
    #ffffff 0%,
    #ffffff 62%,
    rgba(255, 255, 255, 0.65) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#ffffff', GradientType=0);
`;

export const TitleBox = styled.div`
  z-index: 3;
  position: absolute;
  right: -10px;
  top: -25px;
  min-width: 200px;
`;

export const DestaqueBox = styled.div`
  display: flex;
  position: relative;
  margin: 15px;
  height: 500px;
  flex: 1;
  width: calc(66.66% - 30px);
  min-width: 320px;
  max-width: 100%;
  animation: ${entradaTop} 1.6s;
  img {
    border: 1px solid #fff;
  }
  @media (max-width: 480px) {
    height: 220px;
  }
`;
export const ProdutoDestaqueBox = styled.div`
  position: relative;
  margin: 15px;
  min-width: calc(100% - 30px);
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  animation: ${entradaTop} 2.2s;
  overflow: hidden;
  img {
    border: 1px solid #ffffff;
  }
`;

export const DestaquesBox = styled.div`
  flex: 1;
  margin: 15px;
  width: 100%;
  min-width: 290px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  animation: ${entradaTop} 2.8s;
  img {
    border: 1px solid #fff;
  }
  &:last-child {
    img {
      @media (max-width: 1064px) {
        min-height: initial;
        max-width: initial;
        min-width: 100%;
      }
    }
  }
`;

export const NextProjectBox = styled.div`
  display: flex;
  width: 100%;
  left: -15px;
  max-height: 320px;
  margin: 15px 0;
  flex: 1;
  & > * {
    min-width: 100%;
    margin: 0;
    border-color: #fff;
  }
`;
