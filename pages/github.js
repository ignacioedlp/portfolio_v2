import Head from "next/head";
import Repo from "../components/Repo";
import Link from "next/link";
import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  // tamano de la tabla de datos
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Repositorios",
    },
  },
};

function formatData(objects) {
  const counts = objects.reduce(
    (acc, obj) => {
      const language = obj.language || "N/A";
      if (!acc[language]) {
        acc[language] = 0;
        acc.languages.push(language);
      }
      acc[language]++;
      return acc;
    },
    { languages: [] }
  );

  return {
    labels: counts.languages,
    datasets: [
      {
        // Random data for demo purposes without faker
        label: "Lenguages",
        data: counts.languages.map((category) => counts[category]),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        barThickness: 20,
      },
    ],
  };
}

export default function Home({ data }) {
  const { lenguage, repositories } = useContext(PortfolioContext);

  const result = formatData(repositories);

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
          <div className="w-full flex justify-center sm:hidden md:m-4">
            <div className="md:w-1/2">
              <Bar options={options} data={result} />
            </div>
          </div>
          <div className="flex flex-wrap -m-2">
            {repositories.map((repo) => (
              <Repo repo={repo} key={repo.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
