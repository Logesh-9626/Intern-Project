
// create context 
import { createContext,useState } from "react";

export const UserRegisterContext =createContext();

 // create data save logic with user Provider funtion  
export const UserRegProvider =({children})=>{

    // holde object from register Data+
  const [UserRegdata,setUserDataReg]=useState(null)

  // holde object from register Plan

  const [UserdataPlan,setUserDataPlan]=useState(null)

  //combain Register Data and Plan Data
  const[CombainData,setCombainData]=useState(null)



    //save the reg data to context usestate
    const SaveRegData =(Register)=>{
      setUserDataReg(Register)
      
     }

      
  //save the reg Plan to context usestate
  const UserPlanData=(plan)=>{
    setUserDataPlan(plan)
    const newCombainData=  { ...UserRegdata,plan }
    setCombainData(newCombainData)
    console.log("plan saved and combain data updated",newCombainData)

  }


  const CompleteData =()=>
    {
      const UserFullData={
        ...UserRegdata,
        plan:UserdataPlan,
        
      }
    
      return UserFullData
    }

   
return(<UserRegisterContext.Provider value={{UserRegdata,UserdataPlan,CombainData,SaveRegData,UserPlanData,CompleteData}}>
  {children}
  </UserRegisterContext.Provider>
  ); 
}

   

