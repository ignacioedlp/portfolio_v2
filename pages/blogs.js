import Head from "next/head";
import Link from "next/link";
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
      <section className="text-white bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              {lenguage === "es" ? "Repositorios" : "Repositories"}
            </h1>
            <div className="flex mx-auto m-6 text-white bg-gray-600 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
              <Link href="https://github.com/ignacioedlp" passHref>
                {lenguage === "es" ? "Ver repositorios" : "See repositories"}
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap -m-2">
            {blogs.map((repo, index) => (
              <div key={index}></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
