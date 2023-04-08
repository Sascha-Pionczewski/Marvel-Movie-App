import { GlobalStyles, lightTheme, darkTheme } from "../contexts/ThemeConfig";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { BookmarkProvider } from "../contexts/BookmarkContext";
import "../public/fonts.css";
import { ThemeProvider } from "styled-components";
import { useEffect, useState, createContext } from "react";

export const ThemeContext = createContext();

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("ThemeMode");
    }
    return "light";
  });

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("ThemeMode", theme);
    }
  }, [theme]);

  return (
    <>
      <Head>
        <title>Marvel Movie App</title>
      </Head>
      <BookmarkProvider>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <ThemeContext.Provider value={{ toggleTheme }}>
            <GlobalStyles />
            <Component {...pageProps} />
          </ThemeContext.Provider>
        </ThemeProvider>
      </BookmarkProvider>
      <NavBar />
    </>
  );
}
