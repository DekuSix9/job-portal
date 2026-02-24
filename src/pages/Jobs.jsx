import { useContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { SaveContextProvider } from "../layout/SaveContext";


const Jobs = () => {
       const [jobs,setJobs]=useState([]);
       const {addSave}=useContext(SaveContextProvider)
       useEffect(()=>{
          fetch('jobs.json')
          .then(res=>res.json())
          .then(data=>setJobs(data))
       },[])


    return (
        <div>
            <div className="bg-[#E6F4E1] px-4 py-20">
                <div  className="max-w-11/12 mx-auto font-inter">
                <div className="bg-white shadow-md rounded-xl px-3 py-8 ">
         <div className="flex flex-col md:flex-row items-center gap-3">
       {/* Job Title Input */}
    <div className="flex items-center gap-2 w-full  border border-gray-300 rounded-lg px-3 py-3">
      <CiSearch />
      <input
        type="text"
        placeholder="Job title, keywords..."
        className="w-full outline-none text-sm" />
    </div>

    {/* City Input */}
    <div className="flex items-center gap-2  w-[50%]  border border-gray-300 rounded-lg px-3 py-3">
     
      <select className="w-full outline-none text-sm bg-transparent">
        <option>Job Types</option>
        <option>Frontend</option>
        <option>Backend</option>
        <option>Full Stack</option>
      </select>
    </div>

    {/* Category Dropdown */}
    <div className="flex items-center gap-2  w-[50%]  border border-gray-300 rounded-lg px-3 py-3">
      <select className="w-full outline-none text-sm bg-transparent">
        <option>Location</option>
        <option>Frontend</option>
        <option>Backend</option>
        <option>Full Stack</option>
      </select>
    </div>

    {/* Company */}
   <div className="flex items-center gap-2 w-[50%]  border border-gray-300 rounded-lg px-3 py-3">
      <select className="w-full outline-none text-sm bg-transparent">
        <option>Company</option>
        <option>Frontend</option>
        <option>Backend</option>
        <option>Full Stack</option>
      </select>
    </div>

    {/* Find Jobs Button */}
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap">
      Find Jobs
    </button>

   </div>
   </div>

          </div>
            </div>

            <div className=" max-w-11/12 mx-auto my-12 font-inter">
            <div className=" grid grid-cols-2 gap-8">
                {
                 jobs.map(job=><div key={job.id}>
                   <div key={job.id} className=" py-4 px-4 shadow-md rounded  border border-gray-300" >
                        <div className=" flex flex-col">
                               <div className=" flex gap-4">
                        <img className=" h-10 w-10 rounded-full" src={job.companyLogo}></img>
                         <div>
                            <h1 className=" font-bold text-2xl">{job.companyName}</h1>
                            <p className=" font-medium text-gray-500">{job.location}</p>
                        </div>
                      </div>
                        </div>
                        <div className=" grid grid-cols-3 py-6 pl-14">
                            <div>
                               <p className=" text-gray-400">Experience</p>
                               <h1 className=" font-bold">{job.experience}</h1>
                            </div>
                            <div>
                              <p className=" text-gray-400">Job Type</p>
                              <h1 className=" font-bold">{job.jobType}</h1>
                            </div>
                            <div>
                              <p className=" text-gray-400">Salary</p>
                              <h1 className=" font-bold">{job.salary}</h1>
                            </div>

                        </div>

                        <div className=" flex justify-between">
                         <Link to={`/jobDetails/${job.id}`} className=" text-gray-400 cursor-pointer">View Details</Link>
                         <button onClick={()=>addSave(job)} className=" text-gray-400 cursor-pointer">Save Job</button>
                        </div>
                         
                    </div> 
                 
                  </div>)
                }
            </div>
               
            </div>

        </div>
    );
};

export default Jobs;