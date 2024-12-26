import React from "react";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";

const Mainpage = () => {
  return (
    <div>
      <NavBar />
      <div className="conatiner min-vh-100 justify-content-center align-content-center" style={{ backgroundColor: "#BEE9E9" }}>

        <h1 className="display-3 text-center">Your Friendly AI Assistant</h1>
        <h4 className="display-6 text-center"> Ask me anything, anytime.</h4>

        <div className=" d-flex justify-content-center mt-4">
          <Link to="/Login">
            <button className="btn btn-primary px-4 rounded-pill">Login</button>
          </Link>
          <Link to="/RegisterPage">
            <button className="btn btn-primary px-4 mx-4 rounded-pill">
              Register Now
            </button>
          </Link>
        </div>

      </div>

    </div>
  )
}
export default Mainpage;