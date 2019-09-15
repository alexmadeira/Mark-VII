import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import Button from '~/Buttons';
import Title from '~/blocks/Title';
import Image from '~/blocks/Image';
import Back from '~/blocks/Back';

import api from '-/services/api';

import {
  Header,
  ProjetDescriptionBox,
  ProjetDescription,
  Container,
  TitleBox,
  AgencyBox,
  AgencyDescriptionBox,
  AgencyDescription,
  DestaqueBox,
  ProdutoDestaqueBox,
  DestaquesBox,
} from 'styles/Project';

function Project({ project }) {
  const {
    background,
    url,
    logo,
    longDescription,
    backgroundColor,
    agency,
    destaque,
    produtoDestaque,
    destaqueEsquerda,
    destaqueCentro,
    destaqueDireita,
  } = project;

  return (
    <>
      <Back to="/projetos" text="Projetos" />
      <Header>
        <Image className="background" src={background.url} />
        <ParallaxProvider>
          <Parallax className="logo" y={[-50, 50]} tagOuter="figure">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Image src={logo.url} />
            </a>
          </Parallax>
          <Parallax
            className="ProjetDescriptionBox"
            y={[-50, 50]}
            tagOuter="div"
          >
            <ProjetDescriptionBox>
              <ProjetDescription>
                <h2>{longDescription}</h2>
              </ProjetDescription>
            </ProjetDescriptionBox>
          </Parallax>
        </ParallaxProvider>
      </Header>
      <Container bgColor={backgroundColor}>
        <AgencyBox>
          <AgencyDescriptionBox>
            <AgencyDescription>
              <TitleBox>
                <Title type="reverse">Agencia</Title>
              </TitleBox>
              <h2>{agency.name}</h2>
              <p>{agency.description}</p>
            </AgencyDescription>
          </AgencyDescriptionBox>
          <Image src={agency.image.url} alt={agency.image.name} />
        </AgencyBox>
        <DestaqueBox>
          <Image src={destaque.url} alt={destaque.name} />
        </DestaqueBox>
        <ProdutoDestaqueBox>
          <Image src={produtoDestaque.url} alt={produtoDestaque.name} />
        </ProdutoDestaqueBox>

        <DestaquesBox>
          <Image src={destaqueEsquerda.url} alt={destaqueEsquerda.name} />
        </DestaquesBox>
        <DestaquesBox>
          <Image src={destaqueCentro.url} alt={destaqueCentro.name} />
        </DestaquesBox>
        <DestaquesBox>
          <Image src={destaqueDireita.url} alt={destaqueDireita.name} />
        </DestaquesBox>
        {/* <Row className="noHorizontalMargin">


      </Row>
      <Row>

      </Row>
      <Row className="topMargin noHorizontalMargin">

      </Row>
      <NextProjectBox>
        <NextProject project={nextProject} history={history} simple nextProjectLink />
      </NextProjectBox> */}
      </Container>
    </>
  );
}

Project.getInitialProps = async ({ query }) => {
  const { slug } = query;
  const reponse = await api.get(`project/${slug}`);

  return { project: reponse.data };
};

export default Project;
