import React, { useState, useEffect } from 'react';

import Project from '../blocks/Project';

import { Container } from './styles';
import api from '-/services/api';

export default function ProjectsList({ limit, order, type }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const response = await api.get('projects', {
        params: { limit, order },
      });
      setProjects(response.data);
    }

    loadProjects();
  }, []);

  return (
    <Container>
      {projects.map(project => (
        <Project item={project} key={project.id} type={type} />
      ))}
    </Container>
  );
}
