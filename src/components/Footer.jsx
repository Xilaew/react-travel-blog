import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="bg-gray-800 p-4 text-white py-8">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/">
            {" "}
            <h2 className="text-2xl font-bold mb-4">Travel Passion</h2>{" "}
          </Link>
          <p className="mb-4">
            Your source of inspiration for unforgettable travel experiences.
          </p>
        </div>

        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <div className="flex flex-col mt-4 space-y-2">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/newpostform">New Post</Link>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Follow us </h2>
          <div className="flex space-x-4 mb-4">
            <FaFacebook
              size={24}
              className="text-blue-500 hover:text-blue-600"
            />
            <FaInstagram
              size={24}
              className="text-pink-500 hover:text-pink-600"
            />
            <FaTwitter
              size={24}
              className="text-blue-400 hover:text-blue-600"
            />
            <FaYoutube size={24} className="text-red-500 hover:text-red-600" />
          </div>

          <form className="flex items-center justify-center mt-8">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-4
                    py-2 rounded-r-lg border border-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="justify-between text-center  mt-8 border-t  border-gray-700 pt-4">
        <p>&copy;2025 Travel Passion. </p>
        
      </div>
    </div>
  );
}
