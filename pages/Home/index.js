import React from 'react';

import Banner from '../../components/Banner';
import Projects from '../../components/Projects';

import { Container, Crooked, Center, Basic } from './styles';

export default function Home() {
  return (
    <Container>
      <Banner />
      <Crooked>
        <Projects limit={6} order="asc" simple />
        <Basic reverse top="-70px">
          <h3>Quer saber mais? </h3>
          <p>Dê uma olhadinha nos projetos que participei</p>
          <Center>
            <a to="/projetos" type="outline">
              Projetos
            </a>
            <a
              href="https://trampos.co/alexmadeira"
              target="_blank"
              rel="noopener noreferrer"
            >
              Curriculo
            </a>
          </Center>
        </Basic>
      </Crooked>
    </Container>
  );
}
