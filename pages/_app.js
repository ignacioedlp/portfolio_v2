import "../styles/globals.css";
import Layout from "../components/Layout";
import { LenguageContext } from "../context/LenguageContext";
import { useState } from "react";
import "animate.css";

function MyApp({ Component, pageProps }) {
  const [lenguage, setLenguage] = useState("es");

  return (
    <LenguageContext.Provider value={{ lenguage, setLenguage }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LenguageContext.Provider>
  );
}

export default MyApp;
