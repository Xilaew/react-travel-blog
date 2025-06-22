import { Link } from "react-router";

export function Register() {
  return (
    <>
      <div className="container mx-auto mt-12 px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap:8">
          <div>
            <img
              src="https://t3.ftcdn.net/jpg/00/27/72/32/360_F_27723264_K7BCMubUvnfnL3S8ajo4mbgjij3t6cgG.jpg"
              alt=""
            />
          </div>
          <div className=" bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl text-center font-bold mb-4">
              SIGN UP/REGISTER
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Username: </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">E-mail: </label>
                <input
                  type="email"
                  placeholder="Enter E-mail"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Password: </label>
                <input
                  type="password"
                  placeholder="password"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white rounded"
              >
                Sign up
              </button>
            </form>

            <p className="text-left text-sm text-gray-600">
              Already Registed?
              <Link to="/loginpage" className="text-blue-600 hover:underline">
                {" "}
                Log in{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
