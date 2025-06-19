import { Link } from "react-router-dom";
import {useState} from 'react'
import axios from "axios"
import { useNavigate } from "react-router";

export function LogInPage() {

    const  [email, setEmail] = useState()
    const  [password, setPassword] = useState()
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password})
    .then(res=>{
       if (res.data === "success"){
        navigate('/home')
       }
    })
    .then(res=>console.log(res))
    .catch(err =>console.log(err))
  }

  return (
    <>
      <div className="signupcontainer mx-auto mt-12 px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap:8">
          <div>
        <img src="" alt="" />
      </div>
         
          <div className=" signupform w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              LOG IN TO YOUR ACCOUNT
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your email " 
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                   onChange={e=>setEmail(e.target.value)}
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
                 onChange={e=>setPassword(e.target.value)}
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
              <Link to="/register" className="text-blue-600 hover:underline" > 
                 Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
