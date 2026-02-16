import { useContext } from "react"
import { SaveContextProvider } from "../layout/SaveContext"
import { Link } from "react-router-dom";

const AllJobs = ({filteredJobs}) => {
    const {addSave}=useContext(SaveContextProvider)
    return (
        
        <div className=" font-inter">
            <div className=" flex justify-between">
             <p className=" text-gray-500">{filteredJobs.length} results found</p>
             <p className=" text-gray-500">Sort By</p>
            </div>
            
            {
                filteredJobs.map(job=>(
                    <div key={job.id} className=" py-4 px-4 shadow-md rounded my-8" >
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
                ))
            }
        </div>
    );
};

export default AllJobs;