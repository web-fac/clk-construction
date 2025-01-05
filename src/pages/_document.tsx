import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" style={{}}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#18191A" />
          <meta name="description" content="CLK Construction" />
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="CLK Construction" />
          <meta property="og:description" content="CLK Construction" />
          <meta property="og:url" content="https://jacobmiller22.com" />

          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID_PORTFOLIO}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS_ID_PORTFOLIO}', {
              page_path: window.location.pathname,
            });
          `,
            }}
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
