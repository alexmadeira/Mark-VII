import React, { Component } from 'react';

import { Container, Preload, Content } from './styles';

class Image extends Component {
  state = {
    loadImage: false,
  };

  render() {
    const { src, alt, title } = this.props;
    const { loadImage } = this.state;
    return (
      <Container>
        <Preload
          src={`${src}?thumb=true`}
          alt={alt}
          className={loadImage && 'hidden'}
        />
        <Content
          src={src}
          alt={alt}
          title={title}
          className={loadImage && 'show'}
          onLoad={() => this.setState({ loadImage: !loadImage })}
        />
      </Container>
    );
  }
}
export default Image;
