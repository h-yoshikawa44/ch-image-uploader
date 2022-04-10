import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;1,700&family=Noto+Sans:ital,wght@0,500;1,500&family=Poppins:ital,wght@0,500;1,500&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
