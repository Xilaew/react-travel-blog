import { CityList } from "../components/CityList";

export function Home() {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://www.shutterstock.com/image-photo/travel-by-plane-woman-passenger-260nw-2467550689.jpg)",
        }}
      >
        <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            WELCOME TO THE TRAVEL PASSION BLOG
          </h1>
          <p className="text-lg md:text-2l text-white mb-8">
            Discover amazing travel stories and tips
          </p>

          <button className="border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-orange-500 transform transition duration-300 hover:scale-105">
            Get Started
          </button>
        </div>
      </div>

      <CityList />
    </>
  );
}
