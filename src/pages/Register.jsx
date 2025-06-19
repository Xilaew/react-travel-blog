import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { Navigate } from "react-router"
import axios from "axios"

export function Register() {
  const  [username, setUsername] = useState()
  const  [email, setEmail] = useState()
  const  [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register',{username,email,password})
    .then(res=> navigate('/login'))
    .then(res=>console.log(res))
    .catch(err =>console.log(err))
  }
  return (
   <>
       
  <div className="signup_container mx-auto mt-12 px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap:8">
      <div>
        <img src="" alt="" />
      </div>
  <div className= "signup_form bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl text-center font-bold mb-4">SIGN UP/REGISTER</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Username: </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={e=>setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">E-mail: </label>
                  <input type="email" placeholder="Enter E-mail" 
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={e=>setEmail(e.target.value)}/>
                   
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Password: </label>
                  <input type="password" placeholder="password" 
                  className="w-full p-2 border border-gray-300 rounded"
                   onChange={e=>setPassword(e.target.value)}/>
                  
                </div>
               
                <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded">Sign up</button>
              </form>

              <p className="text-left text-sm text-gray-600">
      Already Registed?
      <Link to="/login" className="text-blue-600 hover:underline"> Log in </Link>  
    </p>
            </div>

    </div>
  </div>
          
        
      </>
)}
