import React, { useState } from "react";

const FileUpload = () => {
    const [WrgFile, setWrgFile] = useState(null);
    const [file ,setfile]=useState(null)

    const AllowedTypes = ["application/pdf", "application/doc", "application/docs", "image/jpg", "image/png"]

    const MaxFileSize = 5 * 1024 * 1024

    const handleFileUplode = (e) => {
        const UplodedFile = e.target.files[0];
        console.log(UplodedFile)
        
  try{
    if ( UplodedFile) {
    if (!AllowedTypes.includes(UplodedFile.type)) {
        setWrgFile('Invalid File type')
        
    }
    if (UplodedFile.size > MaxFileSize) {
        setWrgFile('File Size Exeeded')
    }
}
else{
    setfile(UplodedFile)
    setWrgFile(null)
}
   
    
}
  catch(e){
    console.log('error',e)
  }
}

    return (
        <>
            <div>
                <div className="px-5 py-3 rounded-pill shadow-lg mt-3" style={{ backgroundColor: "#77b1b5" }}>
                    <h3 className="text-center">Uplode Your File</h3>
                    <input type="file" className="" onChange={handleFileUplode} style={{ backgroundColor: "#77b1b5" }} />
                    <h4>{WrgFile}</h4>
                    <button className="btn btn-primary">Submit</button>
            </div> 
        </div>
    </>
    );
}


export default FileUpload;