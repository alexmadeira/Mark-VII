import React from 'react';
import { Link } from '../../routes';

import { Outline, Solid, Invisibile } from './styles';

export default function Buttons(props) {
  const { type, children, to } = props;

  switch (type) {
    case 'solid':
      return (
        <Solid
          content={children}
          loadNexPage={() => {
            nexPage({ history, to });
          }}
        />
      );
    case 'invisibile':
      return (
        <Invisibile
          content={children}
          loadNexPage={() => {
            nexPage({ history, to });
          }}
        />
      );
    case 'outline':
      return (
        <Link route={to}>
          <Outline>{children}</Outline>
        </Link>
      );
    case 'link':
      return <Outline {...props}>{children}</Outline>;
    default:
      return (
        <Solid
          content={children}
          loadNexPage={() => {
            nexPage({ history, to });
          }}
        />
      );
  }
}
