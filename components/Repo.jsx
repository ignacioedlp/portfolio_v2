import { React } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiJavascript, SiPhp, SiTypescript, SiGithub } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

function Repo({ repo, lenguage }) {
  const jsUrl = <SiJavascript color="javascript" />;
  const phpUrl = <SiPhp />;
  const nodeUrl = <IoLogoNodejs />;
  const tsUrl = <SiTypescript />;
  const other = <SiGithub />;

  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full ">
      <div
        className="h-full flex items-center bg-gray-700  p-4 rounded-lg shadow-lg cursor-pointer "
        onClick={() => window.open(repo.html_url)}
      >
        <div className="mx-2 text-3xl text-white">
          {repo.language === "JavaScript"
            ? jsUrl
            : repo.language === "PHP"
            ? phpUrl
            : repo.language === "TypeScript"
            ? tsUrl
            : repo.language === "NodeJS"
            ? nodeUrl
            : other}
        </div>
        <div className="flex-grow">
          <h2 className="text-white title-font font-medium">{repo.name}</h2>
          <p className="text-white">{repo.language}</p>
        </div>
      </div>
    </div>
  );
}

export default Repo;
