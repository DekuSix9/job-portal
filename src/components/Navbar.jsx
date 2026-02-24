import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";



const Navbar = () => {
    const [open,setOpen] = useState(false);

    return (
        <div className=" max-w-11/12 mx-auto my-8">
            <div className=" flex justify-between items-center">
                 {/* logo */}
                 <div>
                  <h1 className='text-xl font-bold text-[#84BD00]'>CareerHub</h1>
                 </div>
                
                 {/* middle items */}
                 <div className="hidden md:flex space-x-4">
                    <NavLink className={({ isActive }) => isActive ? "text-[#84BD00]" : "text-black hover:text-[#84BD00]"} to="/">Home</NavLink>
                   <NavLink to='/jobs' className={({ isActive }) => isActive ? "text-[#84BD00]" : "text-black hover:text-[#84BD00]"} >Jobs</NavLink>
                   <NavLink to='/savedjobs' className={({ isActive }) => isActive ? "text-[#84BD00]" : "text-black hover:text-[#84BD00]"} >Saved Jobs</NavLink>
                   <NavLink className={({ isActive }) => isActive ? "text-[#84BD00]" : "text-black hover:text-[#84BD00]"} to="/contact"> Applied Jobs</NavLink>
                 </div>

                 {/* buttons */}
                 <div className=" hidden md:flex space-x-4">
                    <button className=" border px-8 py-2 rounded-lg  text-gray-500 hover:bg-[#84BD00] hover:text-white">Login</button>
                    <button className=" border px-8 py-2 rounded-lg  text-white bg-[#84BD00] hover:bg-[#509E2F] ">Register</button>
                 </div>

                 <button
                 className=" md:hidden text-4xl "
                  onClick={()=>setOpen(!open)}>
                    {
                        open?<IoMdClose/>:<IoMdMenu/>
                    }

                 </button>
            </div>
              {/* menu for mobile */}
            {
                open && (
                    <div className="md:hidden mt-6 flex flex-col bg-white shadow-md  p-6 space-y-4">
                   <NavLink className={({ isActive }) => isActive ? "text-[#84BD00]" : "text-black hover:text-[#84BD00]"} to="/">Home</NavLink>
                   <NavLink  to='/jobs' className={({ isActive }) => isActive ? "text-[#84BD00]" : "text-black hover:text-[#84BD00]"} >Jobs</NavLink>
                   <NavLink to='/savedjobs' className={({ isActive }) => isActive ? "text-[#84BD00]" : "text-black hover:text-[#84BD00]"} >Saved Jobs</NavLink>
                   <NavLink className={({ isActive }) => isActive ? "text-[#84BD00]" : "text-black hover:text-[#84BD00]"} to="/contact"> Applied Jobs</NavLink>
                    <div className="pt-4 space-y-3">
            <button className="w-full border py-2 rounded-lg text-gray-500 hover:bg-[#84BD00] hover:text-white">
              Login
            </button>
            <button className="w-full border py-2 rounded-lg text-white bg-[#84BD00] hover:bg-[#509E2F]">
              Register
            </button>
          </div>
                 
               </div>
                )
            }
            
        </div>
    );
};

export default Navbar;