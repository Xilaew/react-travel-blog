import { Link } from "react-router";

export function LogInPage() {
  return (
    <>
      <div className="container mx-auto mt-12 px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap:8">
          <div>
            <img
              src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
              alt=""
            />
          </div>

          <div className=" w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              LOG IN TO YOUR ACCOUNT
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your email "
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <Link
                to="/"
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-sm transition duration-300"
              >
                Log In
              </Link>
            </form>

            <p className="text-left text-sm text-gray-600">
              Don’t have an account?
              <Link to="/register" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
