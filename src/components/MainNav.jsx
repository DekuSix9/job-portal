import AllJobs from "./AllJobs";

const MainNav = ({filteredJobs}) => {
   

    return (
        <div >
            <AllJobs filteredJobs={filteredJobs}></AllJobs>
        </div>
    );
};

export default MainNav;