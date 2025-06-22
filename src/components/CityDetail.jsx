import { useParams, Link } from "react-router-dom";
import cities from "../cities";
import { useState } from "react";

export function CityDetail() {
  const { id } = useParams();
  const city = cities.find((c) => c.id === parseInt(id));
  const [showMap, setShowMap] = useState(true); 

  return (
    <div className="min-h-screen flex flex-col md:flex-row pt-24 px-6 bg-gray-50">
      {/* LEFT SIDE: City details */}
      <div className="w-full md:w-2/3 lg:w-3/5 pr-6">
        <Link
          to="/"
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
           Back to Home Page
        </Link>
        <div className="overflow-hidden rounded-lg mb-4">
          <img
            src={city.thumbnail}
            alt={city.title}
            className="w-full h-[400px] object-cover object-center"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{city.title}</h1>
        <p className="text-gray-600 mb-1 text-lg">{city.location}</p>
        <p className="text-sm text-gray-500 mb-4">
          From {city.startDate} to {city.endDate}
        </p>
        <div className="flex items-center mb-6">
          <img
            src={city.authorPhoto}
            alt={city.author}
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="text-sm text-gray-700">{city.author}</span>
        </div>
        <p className="text-gray-800 leading-relaxed text-justify">
          {city.summary}
        </p>

        {/* Mobile Map Toggle Button */}
        <div className="mt-6 block md:hidden">
          <button
            onClick={() => setShowMap((prev) => !prev)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {showMap ? "Hide Map" : "Show Map"}
          </button>
        </div>
      </div>

      {/* RIGHT SIDE: Collapsible Map */}
      {showMap && (
        <div className="relative hidden md:block md:w-1/3 lg:w-2/5 bg-white p-4 shadow-inner rounded-lg">
          {/* Close Button */}
          <button
            onClick={() => setShowMap(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl font-bold"
            aria-label="Close Map"
          >
            ×
          </button>

          <div className="relative w-full h-[400px] rounded overflow-hidden shadow">
            {city.googleMapLink ? (
              <iframe
                src={city.googleMapLink}
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="rounded"
                title={`Map of ${city.title}`}
              ></iframe>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                No map available
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
