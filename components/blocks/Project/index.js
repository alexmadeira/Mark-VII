import React, { useState, useEffect, createRef } from 'react';

import Button from '~/Buttons';
import Title from '../Title';
import Image from '../Image';

import {
  Container,
  Logo,
  TitleBox,
  ViewMore,
  ButtomMore,
  DescriptionBox,
  BigDescriptionBox,
  NextProjectOverlay,
} from './styles';

export default function Project({ item, type, nextProjectLink }) {
  const [Open, setOpen] = useState(false);
  const [Hover, setHover] = useState(false);
  const ref = createRef();

  function toogleOpen() {
    setOpen(!Open);
  }

  useEffect(() => {
    if (Open) {
      setTimeout(() => {
        ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 500);
    }
  }, [Open]);
  return (
    <Container
      ref={ref}
      item={item.order}
      bgimage={item.background.url}
      bgcolor={item.backgroundColor}
      className={`${Open && 'open'} ${nextProjectLink && 'overflow'}`}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Button to={`/projeto/${item.slug}`} type="invisibile" />
      <Image
        src={item.preview.file}
        className={`${nextProjectLink && 'blur'} ${Hover && 'hover'}`}
      />

      {nextProjectLink && <NextProjectOverlay className={Hover && 'hover'} />}
      <Logo className={`logo ${Open && 'open'} ${nextProjectLink && 'center'}`}>
        <img src={item.logo.file} alt="alex-madeira-smiles-logo.png" />
      </Logo>
      {!nextProjectLink && (
        <TitleBox className="title">
          <Title>{item.name}</Title>
        </TitleBox>
      )}
      {type === 'full' && (
        <ViewMore>
          {Open ? (
            <ButtomMore onClick={() => toogleOpen()}>Fechar</ButtomMore>
          ) : (
            <>
              <ButtomMore onClick={() => toogleOpen()}>Ver</ButtomMore>
              <Button to={`/projeto/${item.slug}`} type="solid">
                Completo
              </Button>
            </>
          )}
        </ViewMore>
      )}
      {!nextProjectLink && (
        <DescriptionBox>
          <h3>{item.description}</h3>
        </DescriptionBox>
      )}
      <BigDescriptionBox className={Open && 'open'}>
        <p>{item.longDescription}</p>
      </BigDescriptionBox>
    </Container>
  );
}
