import React from "react";
import Image from "next/image";
import Link from "next/link";
function Repo({ repo }) {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <div className="mx-2">
          <Image
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="/Images/miFoto.png"
            width={60}
            height={60}
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{repo.name}</h2>
          <p className="text-gray-500">{repo.language}</p>
        </div>
      </div>
    </div>
  );
}

export default Repo;
