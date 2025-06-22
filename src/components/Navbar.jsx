import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


export function Navbar () {
    const[isOpen,setIsOpen] = useState(false)
     
  return (
    <nav className="fixed m-4 top-0 right-0 left-0 shadow-lg z-50 bg-white">
        <div className="container px-4 flex justify-between items-center h-16">
            
           <Link to="/" ><h3 className="text-2xl font-bold">TRAVEL PASSION</h3> </Link> 

            <div className="hidden md:flex space-x-4 text-sm font-bold items-center">
                <Link to="/" className="px-6 py-2 hover:bg-orange-600 hover:text-white"> Home </Link> 
                <Link to="/contact" className="px-6 py-2 hover:bg-orange-600 hover:text-white"> Contact </Link>
                <Link to="/about" className="px-6 py-2 hover:bg-orange-600 hover:text-white"> About </Link>
                <Link to="/newpostform" className="px-6 py-2 hover:bg-orange-600 hover:text-white"> New Post</Link>
                  <Link to="register" className="px-6 py-2 hover:bg-orange-600 hover:text-white"> Log in/Register</Link>
               
            </div>

            <div className="md:hidden">
                <button onClick={()=>setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes/>: <FaBars/>}
                </button>
            </div>
        </div>

        {isOpen && (
              <div className="md:hidden flex space-y-6 py-4 flex-col bg-white items-center">
                <Link to="/" className="px-6 py-2 hover:bg-orange-600 hover:text-white"> Home </Link>
                <Link to="/contact" className="px-6 py-2 hover:bg-orange-600 hover:text-white"> Contact </Link>
                <Link to="/about" className="px-6 py-2 hover:bg-orange-600 hover:text-white"> About </Link>
                <Link to="/newpost" className="px-6 py-2 hover:bg-orange-600 hover:text-white"> New Post</Link>
                  <Link to="register" className="px-6 py-2 hover:bg-orange-600 hover:text-white"> Log in/Register</Link>
               
            </div>
        )}
    </nav>
  )
}