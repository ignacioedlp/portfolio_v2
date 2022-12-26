import Head from "next/head";
import Profile from "../components/Profile";
import Technologies from "../components/Technologies";
import Proyects from "../components/Proyects";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import { useContext, useEffect } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

export default function Home() {
  const { lenguage, proyects, information, skills } =
    useContext(PortfolioContext);
  return (
    <div>
      <Head className="container mx-auto">
        <title>Ignacio C.</title>

        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Profile lenguage={lenguage} information={information}></Profile>
      <Resume lenguage={lenguage} information={information}></Resume>
      <Technologies lenguage={lenguage} skills={skills}></Technologies>
      <Proyects lenguage={lenguage} proyects={proyects}></Proyects>
      <Contact lenguage={lenguage} information={information}></Contact>
    </div>
  );
}
