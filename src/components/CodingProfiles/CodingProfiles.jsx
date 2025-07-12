import React from "react";
import { codingProfiles } from "../../constants";

const CodingProfiles = () => {
  return (
    <section id="coding" className="py-24 px-[12vw] font-sans bg-[#0f172a]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CODING PROFILES</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Links to platforms where I regularly solve problems and participate in contests
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {codingProfiles.map((profile) => (
          <div
            key={profile.id}
            className="bg-gray-900 border border-white rounded-xl p-6 flex flex-col items-center shadow-2xl hover:shadow-purple-500/50 transition-transform"
          >
            <img
              src={profile.logo}
              alt={profile.title}
              className="w-20 h-20 object-contain mb-4"
            />
            <h3 className="text-white text-xl font-semibold mb-2">
              {profile.title}
            </h3>
            <p className="text-gray-400 mb-4">{profile.username}</p>
            <div className="flex flex-col items-center text-gray-300 mb-4">
              <p className="text-sm">Rating: {profile.rating || "N/A"}</p>
              <p className="text-sm">Badge: {profile.badge|| "N/A"}</p>
            </div>
            <a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl font-semibold text-sm"
            >
              Visit
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
