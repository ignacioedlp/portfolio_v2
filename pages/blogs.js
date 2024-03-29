import Head from "next/head";
import { useContext } from "react";
import { BlogsContext } from "../context/BlogsContext";

export default function Blog() {
  const { blogs } = useContext(BlogsContext);

  return (
    <div>
      <Head className="container mx-auto  bg-gray-900">
        <title>Ignacio C.</title>

        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-white bg-gray-900 body-font"></section>
    </div>
  );
}
