import React from 'react';

import Title from '../Title';
import Image from '../Image';

import { Container, Logo, TitleBox } from './styles';

export default function Project({ item }) {
  return (
    <Container item={item.order}>
      <Image src={item.preview.file} />
      <Logo className="logo">
        <a to="/projeto/st-marche">
          <img src={item.logo.file} alt="alex-madeira-smiles-logo.png" />
        </a>
      </Logo>
      <TitleBox className="title">
        <Title>{item.name}</Title>
      </TitleBox>

      {/* <div className="DescriptionBox sc-cSHVUG lhwPHq">
        <h3 className="sc-chPdSV gTrfBz">
          É mais fácil conhecer o Brasil e o mundo com a Smiles!{' '}
        </h3>
      </div>
      <div className="sc-kAzzGY hGuxFa">
        <p>
          Escolhida pelos leitores do jorn e 13 milhões de clientes, emite 5
          milhões de bilhetes por ano e aproximadamente 6 bilhões de
          milhas/pontos são resgatados por mês.
        </p>
      </div> */}
    </Container>
  );
}
