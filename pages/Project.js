import React from 'react';
import Button from '~/Buttons';
import api from '-/services/api';

// import { Container } from './styles';

function Project({ project }) {
  console.log(project);
  return (
    <Button to="/" type="outline">
      {/* {query.slug} */}
    </Button>
  );
}

Project.getInitialProps = async ({ query }) => {
  const { slug } = query;
  const reponse = await api.get(`project/${slug}`);

  return { project: reponse.data };
};

export default Project;
