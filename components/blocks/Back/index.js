import React from 'react';

import Buttom from '~/Buttons';

import { Container, Arrow, ArrowBox } from './styles';

export default function Back({ text, to }) {
  return (
    <Container>
      <ArrowBox>
        <Buttom to={to} type="invisibile">
          <Arrow className="animated-arrow">
            <span className="the-arrow -left">
              <span className="shaft" />
            </span>
            <span className="main">
              <span className="text">{text || 'Voltar'}</span>
              <span className="the-arrow -right">
                <span className="shaft" />
              </span>
            </span>
          </Arrow>
        </Buttom>
      </ArrowBox>
    </Container>
  );
}
