import {  useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Company = ({jobs, selectedCompany, setSelectedCompany}) => {
    
       const [visible,setVisible]=useState(4);
        const uniqueCompany=[...new Set(jobs.map(job=>job.companyName))];
     
        const handleSeemore=()=>{
            setVisible((prev)=>prev+4)
        }

    return (
           <div className=" mt-4">
           <span className="block w-full border-t border-gray-200"></span>
             <div className=" flex justify-between text-gray-500 mb-2">
                <h1 >Company</h1>
                <button onClick={()=>setSelectedCompany('')}>Clear</button>
             </div>
            {
                uniqueCompany.slice(0,visible).map(loca=>
                    <button key={loca} onClick={()=>setSelectedCompany(loca)} className={` py-0.5 w-full flex ${selectedCompany===loca? "text-[#84BD00]" : "text-black"}`}>
                        {loca}
                    </button>
                )
            }
            {
                visible<uniqueCompany.length&&(
                  <button onClick={handleSeemore} className=" mt-1 flex items-center space-x-1 text-sm text-gray-500">
                      <span>More</span> <IoIosArrowDown className=" mt-1" /></button>
                )
            }
            
        </div>
    );
};

export default Company;