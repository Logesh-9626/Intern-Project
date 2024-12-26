import React from "react";
import NavBar from "../Components/NavBar";
import FileUpload from "../Components/FileUplode";
import FileQuestion from "../Components/FileQuestion";


const AiPage=()=>{
    return(
        
    <>
    <main style={{ backgroundColor: "#498092e4" }}>
    <NavBar/>
    <div
      className="container QuestionInput  min-vh-100  d-flex flex-column  justify-content-start align-items-start" style={{height:10}}>
    
        {/* File Upload Component */}
              <FileUpload/>

        {/* File Question Component */}
             <FileQuestion/>
        
    </div>
    </main>
    </>)

}
export default AiPage;