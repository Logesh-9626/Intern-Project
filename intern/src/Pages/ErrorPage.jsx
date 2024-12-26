import { useNavigate } from "react-router-dom"
import React from "react"

const ErrorPage = () => {

  const Navigate = useNavigate()

  return (
    <div>
      
      <div className="conatiner min-vh-100 justify-content-center align-content-center" style={{ backgroundColor: "#BEE9E9" }}>
        <h1 className="display-1 text-center text-info fw-bolder">404</h1>
        <h1 className="display-1 text-center fw-semibold mt-2">PAGE NOT FOUND</h1>
        < h4 className="text-center  mt-1" >Sorry, we can't find the page you're looking for.</h4>

        <div className=" d-flex justify-content-center mt-4">

          <button className="btn btn-primary px-4 rounded-pill"onClick={()=>{Navigate('/')}} >Back to Home</button>


        </div>

      </div>

    </div>
  )
}


export default ErrorPage