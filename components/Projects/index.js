import React from 'react';

import Project from '../blocks/Project';

import { Container } from './styles';

export default function Projects({ limit }) {
  return (
    <Container>
      {(() => {
        const rows = [];
        for (let i = 0; i < limit; i++) {
          rows.push(<Project item={i} key={i} />);
        }
        return rows;
      })()}
    </Container>
  );
}
