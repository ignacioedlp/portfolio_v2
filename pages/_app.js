import "../styles/globals.css";
import Layout from "../components/Layout";
import { PortfolioProvider } from "../context/PortfolioContext";
import { BlogsProvider } from "../context/BlogsContext";
import { useState } from "react";
import "animate.css";

function MyApp({ Component, pageProps }) {
  const [lenguage, setLenguage] = useState("es");

  return (
    <BlogsProvider>
      <PortfolioProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PortfolioProvider>
    </BlogsProvider>
  );
}

export default MyApp;
