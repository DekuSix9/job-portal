import { useEffect, useState } from "react";
import LeftNav from "../components/LeftNav";
import MainNav from "../components/MainNav";
import RightNav from "../components/RightNav";

const Home = () => {
          const [jobs,setJobs]=useState([]);
          const [selectedJobType,setSelectedJobType]=useState('');
           const [selectedLocation, setSelectedLocation] = useState("");
         const [selectedCompany, setSelectedCompany] = useState("");

          useEffect(() => {
            fetch("jobs.json")
              .then(res => res.json())
              .then(data => setJobs(data));
          }, []);

        const filteredJobs = jobs.filter(job => {
    if (selectedJobType && job.jobType !== selectedJobType) return false;
    if (selectedLocation && job.location !== selectedLocation) return false;
    if (selectedCompany && job.companyName !== selectedCompany) return false;
    return true;
  });


    return (
        <div className=" font-inter">

            <main className=" max-w-11/12 mx-auto grid grid-cols-12 gap-8">
                {/* left-side */}
                <aside className=" col-span-3">
                  <LeftNav jobs={jobs}
                selectedJobType={selectedJobType}
               setSelectedJobType={setSelectedJobType}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              selectedCompany={selectedCompany}
                 setSelectedCompany={setSelectedCompany} />
                </aside>
                {/* middle */}
                <section className=" col-span-6">
                 <MainNav filteredJobs={filteredJobs} />
                </section>
                {/* right side */}
                <aside className=" col-span-3">
                     <RightNav/>
                </aside>

            </main>
            
        </div>
    );
};

export default Home;