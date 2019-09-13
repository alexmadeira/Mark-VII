import React from 'react';

import Banner from '~/Banner';
import ProjectsList from '~/ProjectsList';

import Button from '~/Buttons';

import {
  Container,
  Crooked,
  Center,
  Basic,
  FigureBox,
  Title,
} from 'styles/Home';

export default function Home() {
  return (
    <Container>
      <Banner />
      <Crooked>
        <ProjectsList limit={6} order="asc" type="simple" name="HOME" />
        <Basic reverse top="-40px">
          <h3>Quer saber mais? </h3>
          <p>Dê uma olhadinha nos projetos que participei</p>
          <Center>
            <Button to="/projetos" type="outline">
              Projetos
            </Button>
            <Button to="curriculo" type="outline">
              Curriculo
            </Button>
          </Center>
        </Basic>
      </Crooked>
      <Basic top="40px" shadow>
        <Title>
          Layout responsivo, fluido, mobile e todas as variacões possíveis
        </Title>
        <FigureBox>
          <img
            src="https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/geral/Responsive.jpg"
            alt="responsive"
          />
        </FigureBox>
      </Basic>
      <Basic>
        <h3>Gostou do que viu?</h3>
        <p>Entre em contato, ou não</p>
        <div>
          <Button
            href="mailto:alex@alexmadeira.com.br"
            target="_top"
            rel="noopener noreferrer"
            type="link"
          >
            Contato
          </Button>
        </div>
      </Basic>
    </Container>
  );
}
