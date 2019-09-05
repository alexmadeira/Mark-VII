import React, { useState, useEffect } from 'react';

import Project from '../blocks/Project';

import { Container } from './styles';
import api from '-/services/api';

export default function Projects({ limit }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const response = await api.get('projects', {
        params: { limit, order: 'asc' },
      });
      setProjects(response.data);
    }

    loadProjects();
  }, []);

  return (
    <Container>
      {projects.map(project => (
        <Project item={project} key={project.id} />
      ))}
    </Container>
  );
}
