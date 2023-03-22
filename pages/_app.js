import GlobalStyle from "../styles";
import Head from "next/head";
import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Marvel Movie App</title>
      </Head>
      <Component {...pageProps} />
      <NavBar />
    </>
  );
}
