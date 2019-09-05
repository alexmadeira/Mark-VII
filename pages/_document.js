import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import Footer from '~/blocks/Footer';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Bangers"
            rel="stylesheet"
          />
          <link
            href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Architects+Daughter"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/static/global.css" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <Footer />
          <NextScript />
        </body>
      </html>
    );
  }
}
