import React from 'react';
import PropTypes from 'prop-types';

import { Container, Border, Background, Text } from './styles';

export default function Title({ children, type }) {
  return (
    <Container>
      <Text>{children}</Text>
      <Border className={type}>
        <Text>{children}</Text>
        <Background className={type}>
          <Text>{children}</Text>
        </Background>
      </Border>
    </Container>
  );
}

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()])
    .isRequired,
  type: PropTypes.string,
};

Title.defaultProps = {
  type: '',
};
