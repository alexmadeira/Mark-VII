import styled from 'styled-components';

export const Container = styled.div`
  color: #000;
  position: relative;
  padding: 10px;
  & > h1 {
    margin-left: 15px;
  }
`;
export const Border = styled.div`
  background: #000;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  clip-path: polygon(0 0, 100% 30%, 100% 80%, 0% 100%);
  &.reverse {
    clip-path: polygon(0 30%, 100% 0, 100% 100%, 0% 80%);
  }
  & > h1 {
    margin-left: 15px;
    color: #fff;
  }
`;
export const Background = styled.div`
  background: #ff8302;
  background: -moz-linear-gradient(left, #ff8302 0%, #ffd702 100%);
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, #ff8302),
    color-stop(100%, #ffd702)
  );
  background: -webkit-linear-gradient(left, #ff8302 0%, #ffd702 100%);
  background: -o-linear-gradient(left, #ff8302 0%, #ffd702 100%);
  background: -ms-linear-gradient(left, #ff8302 0%, #ffd702 100%);
  background: linear-gradient(to right, #ff8302 0%, #ffd702 100%);
  color: #000;
  position: absolute;
  top: 5px;
  left: 5px;
  padding: 5px;
  width: calc(100% - 10px);

  clip-path: polygon(0 0, 100% 35%, 100% 75%, 0% 100%);
  &.reverse {
    clip-path: polygon(0 35%, 100% 0, 100% 100%, 0% 75%);
  }
  & > h1 {
    margin-left: 15px;
  }
`;

export const Text = styled.h1`
  font-family: 'Bangers', cursive;
  font-size: 40px;
  margin: 0;
  color: #000;
  line-height: 80%;
  padding-top: 10px;
  &:first-letter {
    color: #f00;
    text-shadow: 3px 4px 2px #000000;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000;
    font-weight: bold;
    font-size: 60px;
    letter-spacing: 8px;
    margin-top: -14px;
    padding-bottom: 20px;
    float: left;
    text-transform: uppercase;
  }
`;
