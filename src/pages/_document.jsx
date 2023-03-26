// pch.wales root document
//    Use this to overwrite the main DOM layout and to set global HTML properties
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en-gb">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}