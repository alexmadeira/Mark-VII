import React, { useState, useEffect } from 'react';

import api from '-/services/api';
import { setLocalStorage, getLocalStorage } from '-/services/localStorage';

import Project from '../blocks/Project';

import { Container } from './styles';

export default function ProjectsList({ limit, order, type, name }) {
  const [localProjects, setLocalProjects] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (!localProjects) {
      async function loadProjects() {
        const response = await api.get('projects', {
          params: { limit, order },
        });
        console.log('>> load by server');
        setProjects(response.data);
      }
      loadProjects();
    }
  }, [localProjects]);

  useEffect(() => {
    if (projects.length) {
      console.log('>> Set by Local', projects);
      const localStore = {
        name: `@alex-madeira/PROJECTS/${name}`,
        value: projects,
        expiry: 24 * 60 * 60 * 1000,
      };
      setLocalStorage(localStore);
    }
  }, [projects]);

  useEffect(() => {
    const projectsList = getLocalStorage(`@alex-madeira/PROJECTS/${name}`);
    if (!projectsList) {
      setLocalProjects(false);
    } else {
      console.log('>> load by Local');
      setProjects(projectsList);
    }
  }, []);

  return (
    <Container>
      {projects.map(project => (
        <Project item={project} key={project.id} type={type} />
      ))}
    </Container>
  );
}
