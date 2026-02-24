import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";


const JobDetails = () => {
    const {id}=useParams();
    const jobs=useLoaderData();
    const job=jobs.find(job=>job.id===parseInt(id));

    if(!job){
        return <h2>Job not found</h2>
    }
    return (
        <div>
            <div className="bg-[#E6F4E1] px-4 py-20">
        <div className="max-w-11/12 mx-auto font-inter">
             <div className="flex items-center justify-between">
             {/* logo and job info */}
        <div className="flex gap-4">
      <img
        className="h-16 w-16 rounded-full"
        src={job.companyLogo} />

      <div>
        <h1 className="font-bold text-2xl">{job.jobTitle}</h1>

        <div className="flex items-center gap-6 text-gray-500 mt-1">
          <p className="flex items-center gap-2">
            <CiLocationOn className="text-2xl" /> {job.location}
          </p>

          <p className="flex items-center gap-2">
            <CiCalendar className="text-2xl" /> {job.postedDate}
          </p>

          <p className="flex items-center gap-2">
            <CiMoneyBill className="text-2xl" /> {job.salary} /month
          </p>
        </div>
                </div>
             </div>

      {/* right side */}
      <div className=" flex flex-col items-end gap-4 ">
        <p className=" font-light">Application ends:<span className=" text-red-600 font-medium">{job.applicationEndsDate}</span></p>
        <div className=" flex items-center gap-2">
             <button className="px-12 py-3 bg-[#84BD00] text-white rounded-lg
             hover:bg-[#509E2F] transition">  Apply Now
            </button>
            <CiBookmark className=" text-3xl text-[#509E2F]" />
        </div>
      </div>
        
           </div>
       </div>
      </div>
            <div className=" max-w-11/12 mx-auto my-12 ">
            <div className=" grid grid-cols-3">
                {/* left */}
                 <div className=" col-span-2 space-y-8"> 
                    {/* Job Description */}
                   <div className=" space-y-4 ">
                     <h2 className=" text-xl font-semibold">Job Description</h2>
                     <p className="text-gray-500">{job.jobDescription}</p>
                   </div>
                   {/* Key Responsibilities */}
                   <div className=" space-y-4 ">
                    <h2 className=" text-xl font-semibold">Key Responsibilities</h2>
                      <ul className="list-disc list-inside space-y-2 text-gray-500">
                          {job.keyResponsibilities.map((item, index) => (
                              <li key={index}>{item}</li>
                               ))}
                          </ul>
                   </div>
                   {/* Skill & Experience */}
                   <div className=" space-y-4 ">
                    <h2 className=" text-xl font-semibold">Skills & Experience</h2>
                     <ul className="list-disc list-inside space-y-2 text-gray-500">
                          {job.keyResponsibilities.map((item, index) => (
                              <li key={index}>{item}</li>
                               ))}
                          </ul>
                   </div>
                   {/* social media links  */}
                   <div className=" flex gap-2 md:gap-4 items-center  ">
                    <h2 className=" text-lg font-medium">Share this post</h2>
                     <AiFillFacebook className=" cursor-pointer text-2xl" />
                     <AiFillTwitterSquare className=" cursor-pointer text-2xl" />
                    <AiFillInstagram className=" cursor-pointer text-2xl" />
                    <AiFillLinkedin className="cursor-pointer text-2xl" />
                   </div>
                </div>  
                  {/* right */}
                <div className=" col-span-1 bg-[#E6F4E1] p-8 rounded-lg ml-12">
                  <div className=" space-y-8">
                   <h2 className="text-xl font-semibold">Job Overview</h2>
                   <div className=" flex gap-4">
                    <CiCalendar className=" text-4xl text-[#509E2F] " />
                     <div>
                       <p className=" font-semibold">Date Posted</p>
                      <p className=" text-gray-500">{job.postedDate}</p>
                    </div>
                   </div>

                   <div className=" flex gap-4">
                    <CiLocationOn className=" text-4xl text-[#509E2F] " />
                     <div>
                       <p className=" font-semibold">Location</p>
                      <p className=" text-gray-500">{job.location}</p>
                    </div>
                   </div>

                   <div className=" flex gap-4">
                    <CiMoneyBill className=" text-4xl text-[#509E2F] " />
                     <div>
                       <p className=" font-semibold">Offered Salary</p>
                      <p className=" text-gray-500">{job.salary} /month</p>
                    </div>
                   </div>

                   <div className=" flex gap-4">
                    <CiCalendar className=" text-4xl text-[#509E2F] " />
                     <div>
                       <p className=" font-semibold">Expiration date</p>
                      <p className=" text-gray-500">{job.applicationEndsDate}</p>
                    </div>
                   </div>

                   <div className=" flex gap-4">
                    <IoPeopleOutline className=" text-4xl text-[#509E2F] " />
                     <div>
                       <p className=" font-semibold">Experience</p>
                      <p className=" text-gray-500">{job.experience}</p>
                    </div>
                   </div>

                   <div className=" flex gap-4">
                    <CiCalendar className=" text-4xl text-[#509E2F] " />
                     <div>
                       <p className=" font-semibold">Job Title</p>
                      <p className=" text-gray-500">{job.jobTitle}</p>
                    </div>
                   </div>


                  </div>     
                </div> 
            </div>
            </div>
      


        </div>
     

    );
};

export default JobDetails;