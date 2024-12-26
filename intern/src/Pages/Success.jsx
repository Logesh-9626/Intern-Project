import React, { useContext, useEffect } from "react";
import { UserRegisterContext } from "../../Context/NameContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";





const Success = () => {


    const { CompleteData } = useContext(UserRegisterContext)
    const UserPlanurl = "http://localhost:8000/UserPlan/plan";
    const fetchcompleteData = async (data) => {
        try {
            console.log("Complete Data", data)
            const responce = await axios.post(UserPlanurl, data)
            console.log("responce", responce)
        }
        catch {
            console.error('Error while creating profile:', error.response || error.message);
            alert('Failed to create profile. Please try again.');
        }
    }

    useEffect(() => {
        const data = CompleteData()
        fetchcompleteData(data);
    }, [CompleteData]);


    const Navigate = useNavigate();


    const handleLogin = () => {
        Navigate('/Login')
    }

    return (
        <>
           <NavBar/>

           <main style={{ backgroundColor: "#498092e4" }}>
                <div className="container min-vh-100 d-flex justify-content-center align-items-center">

                    <form
                        action=""
                        className="shadow-lg p-5  bg-content rounded mt-1" style={{ backgroundColor: "#BEE9E9" }} >
                     
                       
                     <h2>SuccessFully Created An Account</h2>
                     <button className="btn btn-primary d-flex justify-content-center aling-items-center" onClick={handleLogin}>Log In</button>

                    </form>
                </div>
            </main>
        </>
    );

}
export default Success;