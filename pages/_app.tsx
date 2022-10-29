import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import MetaContainer from "@components/MetaContainer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={false}>
        <MetaContainer>
          <Component {...pageProps} />
        </MetaContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
