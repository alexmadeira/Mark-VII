import styled, { keyframes } from 'styled-components';

const entrada = keyframes`
  0% { top: 200px; opacity: 0; }
  40% { top: 200px; }
  50% { opacity: 0; }
  100% { top: 0px; opacity: 1; }
`;

export const Container = styled.div`
  border: 1px solid #000;
  cursor: pointer;
  flex: 1;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  max-width: 100%;
  transition: all 1s;
  width: 1px;
  min-height: 1px;
  background-size: cover;
  opacity: 1;
  animation: ${entrada} ${props => (props.item ? 1 + props.item / 5 : 1)}s;
  background: ${props => (props.bgcolor ? `url(${props.bgcolor})` : '#FFFFFF')};
  @media (max-width: 490px) {
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  &::after {
    content: '';
    background-image: url(${props => props.bgimage});
    background-size: cover;
    visibility: hidden;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    transition: all 0.2s;
    z-index: 0;
  }

  &:nth-child(9n + 1) {
    min-width: calc(25% - 30px);
    .logo {
      left: initial;
      right: 0;
      top: initial;
      bottom: 20px;
    }
  }

  &:nth-child(9n + 2) {
    min-width: calc(50% - 30px);
  }

  &:nth-child(9n + 3) {
    min-width: calc(25% - 30px);
    .title {
      right: initial;
      left: 0;
    }
    .logo {
      bottom: 30px;
      top: initial;
      left: initial;
    }
  }
  &:nth-child(9n + 4) {
    min-width: calc(33.33% - 30px);
    .logo {
      bottom: 30px;
      top: initial;
      left: 15%;
    }
  }
  &:nth-child(9n + 5) {
    min-width: calc(33.33% - 30px);
  }
  &:nth-child(9n + 6) {
    min-width: calc(33.33% - 30px);
    .title {
      right: initial;
      left: 0;
    }
    .logo {
      bottom: 30px;
      top: initial;
      left: initial;
    }
  }
  &:nth-child(9n + 7) {
    min-width: calc(50% - 30px);
  }

  &:nth-child(9n + 8) {
    min-width: calc(50% - 30px);
  }
  &:nth-child(9n + 9) {
    min-width: calc(100% - 30px);
  }

  @media (max-width: 960px) {
    min-width: calc(100% - 30px) !important;
  }
  &.open {
    width: calc(100% - 30px) !important;
    min-height: 95vh;
    flex: initial;
    &::after {
      visibility: visible;
    }
  }
  &.simple {
    @media (min-width: 992px) {
      &:nth-child(9n + 4),
      &:nth-child(9n + 1) {
        .DescriptionBox {
          left: initial;
          right: -10px;
        }
      }
    }
  }
  &.overflow {
    overflow: hidden;
  }
  img {
    max-width: initial !important;
  }
  .blur {
    transition: all 500ms linear;
    filter: blur(10px);
    &.hover {
      filter: blur(0px);
    }
  }
`;

export const TitleBox = styled.div`
  z-index: 3;
  position: absolute;
  right: -5px;
  top: -20px;
  min-width: 200px;

  &.open {
    opacity: 0;
  }
  @media (max-width: 460px) {
    display: none;
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 60px;
  width: 40%;
  max-width: 370px;
  z-index: 3;
  transition: all 1s;
  transform: rotate(-25deg);
  left: 0px;
  & > a {
    position: relative;
  }

  img {
    filter: drop-shadow(0px 0px 0px #000000);
    transition: all 0.5s;
    width: 100%;
    min-height: initial;
    max-height: initial;
    position: relative;
  }

  &.open {
    transform: translate(-50%, -50%) !important;
    left: 50% !important;
    top: 100px !important;
    width: initial !important;
    bottom: initial !important;
    right: initial !important;
  }

  &.center {
    transform: rotate(0deg) translate(-50%, -50%);
    top: 50% !important;
    left: 50% !important;
    bottom: initial !important;
    right: initial !important;
  }

  @media (max-width: 960px) {
    transform: translate(-50%, -50%) rotate(0deg);
    left: 50% !important;
    top: 50% !important;
    bottom: initial !important;
    width: 40% !important;
  }
  @media (max-width: 460px) {
    width: 60% !important;
    left: 25% !important;
  }
`;

export const ViewMore = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  a {
    margin: 5px 0;
  }
  @media (max-width: 720px) {
    transform: translate(0, -10%) rotate(0deg);
    top: 55%;
    bottom: initial;
  }
  @media (max-width: 460px) {
    display: none;
  }
`;

export const ButtomMore = styled.button`
  text-decoration: none;
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 20px;
  margin: 5px 0;
  margin: 0 10px;
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
  -webkit-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  margin: 5px 0;
  &:hover {
    background-color: #286090;
    border-color: #204d74;
  }

  &:active {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    font-size: 14px;
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

export const DescriptionBox = styled.div`
  background: #ffffff;
  border: 3px solid #000;
  padding: 10px;
  z-index: 3;
  position: absolute;
  left: -10px;
  bottom: -10px;
  max-width: 80%;

  &.open {
    opacity: 0;
  }

  h3 {
    font-family: 'Architects Daughter', cursive;
    margin: 0;
    padding: 0;
    font-weight: bold;
    width: 100%;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (max-width: 460px) {
    display: none;
  }
`;

export const BigDescriptionBox = styled.div`
  position: absolute;
  bottom: 20%;
  right: 50px;
  width: 70vw;
  background: rgba(255, 255, 255, 0.6);
  padding: 20px;
  -webkit-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  z-index: 3;
  display: none;
  opacity: 0;
  &.open {
    opacity: 1;
    display: block;
  }
`;

export const NextProjectOverlay = styled.div`
  background: rgba(0, 0, 0, 0.9);
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  transition: all 500ms linear;
  &.hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;
