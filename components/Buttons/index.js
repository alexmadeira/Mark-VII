import React from 'react';

// import { Container } from './styles';

export default function Buttons({ type, children, to }) {
  switch (type) {
    case 'solid':
      return (
        <SolidButtom
          content={children}
          loadNexPage={() => {
            nexPage({ history, to });
          }}
        />
      );
    case 'invisibile':
      return (
        <InvisibileButtom
          content={children}
          loadNexPage={() => {
            nexPage({ history, to });
          }}
        />
      );
    case 'outline':
      return (
        <OutlineButtom
          content={children}
          loadNexPage={() => {
            nexPage({ history, to });
          }}
        />
      );
    default:
      return (
        <SolidButtom
          content={children}
          loadNexPage={() => {
            nexPage({ history, to });
          }}
        />
      );
  }
}
