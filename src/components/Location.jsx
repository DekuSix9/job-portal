import {  useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Location = ({ jobs, selectedLocation, setSelectedLocation }) => {
    
    const [visible,setVisible]=useState(4);


    const uniqueLocation = [...new Set(jobs.map(job => job.location))];
    const handleSeemore=()=>{
            setVisible((prev)=>prev+4)
        }
    return (
        <div className=" mt-4">
           <span className="block w-full border-t border-gray-200"></span>
             <div className=" flex justify-between text-gray-500 mb-2">
                <h1 >Location</h1>
                <button onClick={()=>setSelectedLocation('')}>Clear</button>
             </div>
            {
                uniqueLocation.slice(0,visible).map(loca=>
                
                   
              <button key={loca} onClick={()=>setSelectedLocation(loca)} className={` py-0.5 w-full flex ${selectedLocation===loca? "text-[#84BD00]" : "text-black"}`}>
                 {loca}
                  </button>
               


                )
            }
            {
                visible<uniqueLocation.length&&(
                   
     <button onClick={handleSeemore} className=" mt-1 flex items-center space-x-1 text-sm text-gray-500">
             <span>More</span> <IoIosArrowDown className=" mt-1" /></button>
                    
                 
                )
            }
        </div>
    );
};

export default Location;