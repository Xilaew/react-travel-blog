import { Link } from "react-router-dom";
import cities from "../cities";

export function CityList() {
  return (
    <div className="min-h-screen flex mt-10">
      {/* LEFT SIDE: Cards (2/3 width) */}
      <div className="w-full md:w-2/3 lg:w-3/5 p-6 overflow-y-auto">
        <h1 className="text-6xl text-center font-bold mb-6">VISITED CITIES</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cities.map((city) => (
            <div
              key={city.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={city.thumbnail}
                alt={city.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {city.title}
                </h2>
                <p className="text-gray-500 text-sm mt-1">{city.startDate}</p>
                <Link
                  to={`/city/${city.id}`}
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: Empty placeholder (1/3 width) */}
      <div className="hidden md:block md:w-1/3 lg:w-2/5 bg-gray-100 p-6">
        <div className="h-full w-full flex items-center justify-center text-gray-400">
          <p>Map or Image Preview</p>
        </div>
      </div>
    </div>
  );
}
