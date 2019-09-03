import React from 'react';

import Title from '../Title';
import Image from '../Image';

import { Container, Logo, TitleBox } from './styles';

export default function Project({ item }) {
  return (
    <Container item={item}>
      <Image src="http://data.alexmadeira.com.br/files/alex-madeira-smiles-preview.jpg" />
      <Logo className="logo">
        <a to="/projeto/st-marche">
          <img
            src="http://data.alexmadeira.com.br/files/alex-madeira-smiles-logo.png"
            alt="alex-madeira-smiles-logo.png"
          />
        </a>
      </Logo>
      <TitleBox className="title">
        <Title>Smiles</Title>
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
