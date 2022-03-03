import "../styles/globals.css";
import Layout from "../components/Layout";
import { PortfolioProvider } from "../context/PortfolioContext";
import { useState } from "react";
import "animate.css";

function MyApp({ Component, pageProps }) {
  const [lenguage, setLenguage] = useState("es");

  return (
    <PortfolioProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PortfolioProvider>
  );
}

export default MyApp;
