import GlobalStyle from "../styles";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { BookmarkProvider } from "../contexts/BookmarkContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Marvel Movie App</title>
      </Head>
      <BookmarkProvider>
        <Component {...pageProps} />
      </BookmarkProvider>
      <NavBar />
    </>
  );
}
