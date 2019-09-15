import React from 'react';
import ProjectsList from '~/ProjectsList';
import Back from '~/blocks/Back';

import { Container } from 'styles/Projects';

export default function Projects() {
  return (
    <>
      <Back to="/" text="Home" />
      <Container>
        <ProjectsList order="asc" type="full" name="PROJECTS" />
      </Container>
    </>
  );
}
