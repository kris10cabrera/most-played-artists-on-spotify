import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="most played artists on Spotify from the last 6 months. created by kris10cabrera"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta name="title" content="most played artists" />
          <meta
            name="description"
            content="most played artists on Spotify from the last 6 months. created by kris10cabrera"
          />
          <meta property="og:type" content="website" />
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
