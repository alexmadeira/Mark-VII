import styled from 'styled-components';

export const Outline = styled.a`
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
  border: 1px solid #ccc;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 20px;
  padding: 10px 47px;
  margin: 10px;
  border-radius: 5px;
  color: #333;
  background-color: #fff;
  &:hover {
    background: #f4f4f4;
    border-color: #333;
  }
`;

export const Solid = styled.a`
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
`;

export const Invisibile = styled.a`
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 3;
  display: block;
`;
