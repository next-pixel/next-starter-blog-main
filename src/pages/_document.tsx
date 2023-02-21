import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang='en-US'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
          <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap' rel='stylesheet' />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1280321516093670" crossOrigin="anonymous"></script>
          <meta name="msvalidate.01" content="3770E26040336B97D6E3C626472C0C89" />
          <meta name="google-site-verification" content="5e06x4xhLxiUVlXqg2b93KekaEyO1Fyo84aTZcBEwqo" />
          <meta name="yandex-verification" content="14300056874868a1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
