import React, { useState } from "react";

const FileQuestion=()=>{

 const [answer,setAnswer]=useState("Answer")


 const EntrData =(e)=>{
  setAnswer=(...prevData)=>{
     
  }
 }
  // const handleQuery=()=>{
  //   setAnswer((prevdata)=>{
  //     return[...prevdata,`answer ${prevdata.length+1}`]}) }

    return(
        <>
      <div className="container d-flex flex-column  align-content-center flex-wrap justify-content-end " >
          <input type="text" className="form-control w-50 rounded-pill shadow-lg p-3 mt-3 border-0 " placeholder="Ask your questions..."onChange={EntrData} style={{ backgroundColor: "#77b1b5" }}/>
            
          </div>
          <div className="container d-flex flex-column align-content-center flex-wrap justify-content-end  rounded-pill p-4  border-0 "   >
          <buttton className=" btn d-flex aling-content-center"  style={{ backgroundColor: "#77b1b5" }}   >Submit</buttton>
            
          </div>
         
          <div className="container d-flex justify-content-center mt-1 h-50 mb-2  shadow-lg p-3 border-0  " >
           <div style={{
            height:"100%",
           textAlign:"center",
            overflow:"auto" }}>
              <h5>{prompt}</h5>
      
          {/* {answer.map((data,i)=>{
            return <p key={i}>{data}</p>})} */}
            </div>
          </div>  </>
    )
}

export default FileQuestion;