import React ,{useContext}from "react";
import { UserRegisterContext } from "../../Context/NameContext";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";


const Pricing=()=>{
  
  const Navigate=useNavigate();
  const {UserPlanData}=useContext(UserRegisterContext)
  const handleSelectedPlan =(plan)=>{
    try{
      UserPlanData(plan)
      console.log("selected plan",plan)
      Navigate('/Success')
    }

    catch(e){
      console.log("error",e)
    }
  }

   return(
    <>
   <NavBar/>
   <div style={{ backgroundColor: "#498092e4" }}>
      <div className="container min-vh-100 d-flex justify-content-center align-items-center " >
        <div className="row">
          <div className="text-center mb-5" >
            <h1 className="display-5 fw-bold">Elevate Your Experience with InternPro Premium</h1>
            <p className="fs-5 mt-2"> Unlock exclusive features and prioritize your support.</p>
          </div>
          <div className="col col-md-4 col-xs-12">
            <div className="card shadow p-3 mb-5 bg-body rounded " >
              <div className="card-body"style={{ backgroundColor: "#BEE9E9" }} >
                <h3 className="card-text">Free</h3>
                <p>expires in 24 hours</p>
                <ul>
                  <li>Max file size : 5MB</li>
                  <li>OCR support : Yes</li>
                  <li>Customer support : No</li>
                  <li>Totalsessions :limited</li>
                </ul>
                  <button className="btn btn-primary w-100" onClick={()=>{handleSelectedPlan("free")}}>
                    Start Free Trail 
                  </button>
        
              </div>
            </div>
          </div>
          <div className="col col-md-4 col-xs-12" >
            <div className="card shadow p-3 mb-5 bg-body rounded">
              <div className="card-body" style={{ backgroundColor: "#BEE9E9" }}>
                <h3>Pro</h3>
                <p>Rs.999/- per month</p>
                <ul>
                  <li>Max file size : 5MB</li>
                  <li>OCR support : Yes</li>
                  <li>Customer support :Yes</li>
                  <li>Totalsessions : Unlimited</li>
                </ul>
                
                  <button className="btn btn-primary w-100" onClick={()=>{handleSelectedPlan("Pro")}}>Pro</button>
              </div>
            </div>
          </div>
          <div className="col col-md-4 col-xs-12">
            <div className="card shadow p-3 mb-5 bg-body rounded">
              <div className="card-body"style={{ backgroundColor: "#BEE9E9" }}>
                <h3>Advanced</h3>
                <p>Rs.3499/- per year</p>
                <ul>
                  <li>Max file size : 5MB</li>
                  <li>OCR support : Yes</li>
                  <li>Customer support : Yes</li>
                  <li>Totalsessions : Unlimited</li>
                </ul>
                
                  <button className="btn btn-primary w-100" onClick={()=>{handleSelectedPlan("Advance")}} >Advance</button>


         
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
   )
}

export default Pricing;