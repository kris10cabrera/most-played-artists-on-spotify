import Document, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../stitches.config";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link rel="icon" href="/favicon.ico" />
          <meta name="title" content="spotify crushes" />
          <meta
            name="description"
            content="favorite artists on spotify from the last 6 months. made by kris10cabrera"
          />
          <meta property="og:type" content="website" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta
            property="og:url"
            content="https://www.do-you-have-a-crush-on.me/"
          />
          <meta
            property="og:url"
            content="https://www.do-you-have-a-crush-on.me/"
          />
          <meta property="og:title" content="spotify crushes" />
          <meta
            property="og:description"
            content="favorite artists on spotify from the last 6 months. made by kris10cabrera"
          />
          <meta
            property="og:image"
            content="https://www.do-you-have-a-crush-on.me/open-graph.jpg"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://www.do-you-have-a-crush-on.me/"
          />
          <meta property="twitter:title" content="spotify crushes" />
          <meta
            property="twitter:description"
            content="favorite artists on spotify from the last 6 months. made by kris10cabrera"
          />
          <meta
            property="twitter:image"
            content="https://www.do-you-have-a-crush-on.me/open-graph.jpg"
          />
          <meta
            property="og:image"
            content="https://www.do-you-have-a-crush-on.me/open-graph.jpg"
          />
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
