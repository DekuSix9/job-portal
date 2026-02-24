import { useContext } from "react";
import { SaveContextProvider } from "../layout/SaveContext";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const SavedJob = () => {
    const{saveJob,removeJob}=useContext(SaveContextProvider)
    return (
        <div className=" max-w-11/12 mx-auto font-inter">
            <div className=" grid grid-cols-4 gap-y-6 gap-6">
               {
                saveJob.map(job=>
                
                <div className=" flex flex-col gap-2 py-6  items-center border border-gray-200 rounded-lg">
                    <Link to={`/jobDetails/${job.id}`}>
                    <img className=" w-12 h-12 rounded-full" src={job.companyLogo}></img>
                    </Link>
                        <h1 className=" font-bold text-lg">{job.companyName}</h1>
                        <div className=" flex gap-1">
                    <CiLocationOn className="text-xl text-gray-500" /> 
                    <p className=" font-medium text-sm text-gray-500">{job.location}</p>
                        </div>
                        <div>
                            
                        </div>
                        <div className=" flex justify-between gap-4 w-full px-4 mt-4">
                         <Link to={`/jobDetails/${job.id}`} className=" cursor-pointer text-gray-400  ">View Details</Link>
                     <button onClick={()=>removeJob(job.id)} className=" cursor-pointer text-gray-400 ">Delete</button>
                        </div>
                    
                </div>
                )
            }
            </div>
             
            
        </div>
    );
};

export default SavedJob;