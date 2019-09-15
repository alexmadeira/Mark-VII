import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: rgba(51, 51, 51, 0.5);
  height: 50px;
  padding: 0 20px;
  color: #ffffff;
  z-index: 10;
  width: 100%;
  position: absolute;
`;

export const ArrowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  & > * {
    position: relative;
  }
  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Arrow = styled.span`
  display: inline-block;
  color: #fff;
  font-size: 1.25em;
  font-style: italic;
  text-decoration: none;
  position: relative;
  transition: all 0.2s;
  padding: 5px 0;
  cursor: pointer;

  .the-arrow {
    width: 64px;
    transition: all 0.2s;
  }
  .the-arrow.-left {
    position: absolute;
    top: 60%;
    left: 0;
  }
  .the-arrow.-left > .shaft {
    width: 0;
    background-color: #fff;
  }
  .the-arrow.-left > .shaft:before,
  .the-arrow.-left > .shaft:after {
    width: 0;
    background-color: #fff;
  }
  .the-arrow.-left > .shaft:before {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  .the-arrow.-left > .shaft:after {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  .the-arrow.-right {
    top: 3px;
  }
  .the-arrow.-right > .shaft {
    width: 64px;
    transition-delay: 0.2s;
  }
  .the-arrow.-right > .shaft:before,
  .the-arrow.-right > .shaft:after {
    width: 8px;
    transition-delay: 0.3s;
    transition: all 0.5s;
  }
  .the-arrow.-right > .shaft:before {
    -webkit-transform: rotate(40deg);
    transform: rotate(40deg);
  }
  .the-arrow.-right > .shaft:after {
    -webkit-transform: rotate(-40deg);
    transform: rotate(-40deg);
  }
  .the-arrow > .shaft {
    background-color: #fff;
    display: block;
    height: 1px;
    position: relative;
    transition: all 0.2s;
    transition-delay: 0;
    will-change: transform;
  }
  .the-arrow > .shaft:before,
  .the-arrow > .shaft:after {
    background-color: #fff;
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.2s;
    transition-delay: 0;
  }
  .the-arrow > .shaft:before {
    -webkit-transform-origin: top left;
    transform-origin: top left;
  }
  .the-arrow > .shaft:after {
    -webkit-transform-origin: bottom left;
    transform-origin: bottom left;
  }
  &:hover {
    color: #fff;
  }
  &:hover > .the-arrow.-left > .shaft {
    width: 64px;
    transition-delay: 0.1s;
    background-color: #fff;
  }
  &:hover > .the-arrow.-left > .shaft:before,
  &:hover > .the-arrow.-left > .shaft:after {
    width: 8px;
    transition-delay: 0.1s;
    background-color: #fff;
  }
  &:hover > .the-arrow.-left > .shaft:before {
    -webkit-transform: rotate(40deg);
    transform: rotate(40deg);
  }
  &:hover > .the-arrow.-left > .shaft:after {
    -webkit-transform: rotate(-40deg);
    transform: rotate(-40deg);
  }
  &:hover > .main {
    -webkit-transform: translateX(80px);
    transform: translateX(80px);
  }
  &:hover > .main > .the-arrow.-right > .shaft {
    width: 0;
    -webkit-transform: translateX(200%);
    transform: translateX(200%);
    transition-delay: 0;
  }
  &:hover > .main > .the-arrow.-right > .shaft:before,
  &:hover > .main > .the-arrow.-right > .shaft:after {
    width: 0;
    transition-delay: 0;
    transition: all 0.1s;
  }
  &:hover > .main > .the-arrow.-right > .shaft:before {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  &:hover > .main > .the-arrow.-right > .shaft:after {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  & > .main {
    display: flex;
    align-items: center;
    transition: all 0.2s;
  }
  & > .main > .text {
    margin: 0 16px 0 0;
    line-height: 1;
  }
  & > .main > .the-arrow {
    position: relative;
  }
`;
