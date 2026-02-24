import { useContext } from "react";
import { SaveContextProvider } from "../layout/SaveContext";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";


const SaveData = () => {
    const {saveJob,removeJob}=useContext(SaveContextProvider)
    return (
        <div className=" mt-8 ">
            
                  {
                saveJob.map(job=>
                
                <div className=" flex gap-4 py-4">
                    <Link to={`/jobDetails/${job.id}`}>
                     <img className=" w-8 h-8 rounded-full" src={job.companyLogo}></img>
                    </Link>              
                  <div className=" w-full">
                    <div className=" flex justify-between items-center">
                        <h1 className=" font-bold text-lg">{job.companyName}</h1>
                        <button onClick={()=>removeJob(job.id)} className=" cursor-pointer"><MdDeleteOutline className=" text-2xl text-red-500" /></button>
                    </div> 
                    <p className=" font-medium text-sm text-gray-500">{job.location}</p>
                  </div>

                </div>
                )
            }
          
          
        </div>
    );
};

export default SaveData;