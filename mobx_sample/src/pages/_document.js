import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

// 테스트1
export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
