/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const SaveContextProvider=createContext(null);

const SaveContext = ({children}) => {
  const [saveJob,setSaveJob]=useState(()=>{
    try{
       const saved=localStorage.getItem('save-jobs');
    return saved ? JSON.parse(saved):[];
    }
   catch(err){
           console.log(err);
           localStorage.removeItem('save-jobs');
           return [];
   }
  });

  useEffect(()=>{
    localStorage.setItem('save-jobs',JSON.stringify(saveJob));
  },[saveJob])

  const addSave=(data)=>{
    const alreadySaved=saveJob.find(job=>job.id===data.id);
    if(!alreadySaved){
        setSaveJob([...saveJob,data])
    }
    else{
      alert("Job already saved")
    }
    
  }

  const removeJob=(id)=>{
    setSaveJob(saveJob.filter(job=>job.id!==id));
  }


    const saveData={saveJob,addSave,removeJob}
    return (
        <SaveContextProvider.Provider value={saveData}>
            {children}
        </SaveContextProvider.Provider>
    );
};

export default SaveContext;