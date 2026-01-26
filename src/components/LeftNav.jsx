import Company from "./Company";
import JobType from "./JobType";
import Location from "./Location";

const LeftNav = ({jobs, selectedJobType, setSelectedJobType,selectedLocation,setSelectedLocation,selectedCompany,setSelectedCompany}) => {
    return (
        <div className=" max-w-11/12 mx-auto">
            <div>
                <h1 className="text-lg font-bold">Filters</h1>
            </div>
            <div className=" py-4">
                   <JobType jobs={jobs} selectedJobType={selectedJobType} setSelectedJobType={setSelectedJobType} />
                   <Location jobs={jobs} selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation}/>
                   <Company jobs={jobs} selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany}/>
            </div>
          
        </div>
    );
};

export default LeftNav;