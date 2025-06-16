import { FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

export function Contact() {
  return (
    <>
      <div className="bg-gray-100">
        <div
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://www.shutterstock.com/image-photo/contact-us-mockup-happy-consultant-600nw-2254957579.jpg)",
          }}
        >
          <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center">
            <h4 className="text-4xl md:text-6xl font-bold text-white">
              {" "}
              Contact
            </h4>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            <div className="bg-whiten rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Contact Details</h3>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-blue-500 mr-2" />
                <p>info@travelpassion.com</p>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="text-blue-500 mr-2" />
                <p>Tel: +1 575 755 968 </p>
              </div>
              <div className="flex items-center ">
                <FaMapMarkedAlt className="text-blue-500 mr-2" />
                <p>123 Travel St, City, Country</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Get in touch</h3>
              <form action="">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Names: </label>
                  <input
                    type="text"
                    placeholder="Enter your Names"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">E-mail: </label>
                  <input type="email" placeholder="Enter E-mail" 
                  className="w-full p-2 border border-gray-300 rounded"/>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Phone Number: </label>
                  <input type="number" placeholder="Enter phone number" 
                  className="w-full p-2 border border-gray-300 rounded"/>
                </div>
                <div className="mb-4">
                  <label htmlFor="">Message: </label>
                  <textarea
                    name=""
                    id=""
                    placeholder="Leave your massege here"
                    className="w-full p-2 border border-gray-300 rounded"
                  ></textarea>
                </div>
                <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded">Submit your message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
