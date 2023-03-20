import GlobalStyle from "../styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Marvel Movie App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
