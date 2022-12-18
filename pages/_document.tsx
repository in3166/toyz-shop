import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <script
          defer
          src='https://www.paypal.com/sdk/js?client-id=AQdyzyUuG-8qDTvD7xCBNOmQzL7i8z4uqKZPHkGhVsVT4sUpoG12SYLJd0KHOPXbHsfQlQlGkON_cTuj'
        />
        <script src='https://pay.kcp.co.kr/plugin/payplus_web.jsp' />
      </Head>

      <body>
        <div id='snackbarRoot' />
        <div id='backdropRoot' />
        <div id='modalOverlay' />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
