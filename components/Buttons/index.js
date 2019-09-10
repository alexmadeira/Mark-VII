import React from 'react';
import { Link } from '../../routes';

import { Outline, Solid, Invisibile } from './styles';

export default function Buttons(props) {
  const { type, children, to } = props;

  switch (type) {
    case 'solid':
      return (
        <Link to={to}>
          <Solid>{children}</Solid>
        </Link>
      );
    case 'invisibile':
      return (
        <Link to={to}>
          <Invisibile>{children}</Invisibile>
        </Link>
      );
    case 'outline':
      return (
        <Link to={to}>
          <Outline>{children}</Outline>
        </Link>
      );
    case 'link':
      return (
        <Link to={to}>
          <a {...props}>{children}</a>
        </Link>
      );
    default:
      return <Solid content={children} />;
  }
}
