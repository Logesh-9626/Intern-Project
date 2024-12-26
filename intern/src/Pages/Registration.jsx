import axios from "axios";
import React from "react";
import Hidepass from "../../public/hide.jpg"
import Showpass from "../../public/show.jpg"
import { useState, useContext } from "react";
import { UserRegisterContext } from "../../Context/NameContext";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";


const Registration = () => {

    const [Register, setRegister] = useState({
        name: "",
        password: "",
    })
    const [PasswordVisible, setPasswordVisible] = useState(false)


    const ResgisterURL = "http://localhost:8000/register/verification"


    const Navigate = useNavigate()
    const NavigatePage = () => {
        Navigate('/SubcriptionPage')

    }

    // Save data to DB Base
    const SaveData = async () => {

        try {
            const response = await axios.post(ResgisterURL, Register);
            // saveUserRegData(formData)
            const data = response.data

            if (response.status === 201 && !data.success) {
                alert('Email Already Exists');
               

            } else {
                alert('Register Successfully')
                NavigatePage('/SubcriptionPage')
            }
        }
        catch (error) {
            console.error('Error during registration', error);
        }
        SaveRegData(Register)

    }
    const handledata = (e) => {
        setRegister((prevData) => {
            return ({
                ...prevData,
                [e.target.name]: e.target.value
            })

        })
    }
    const { SaveRegData } = useContext(UserRegisterContext)

    //    const GetToken =async()=>{
    //    setJwtToken(localStorage.getItem("Jwt-Token")) 
    //   }




    const togglePasswordVisible = () => {
        setPasswordVisible((preVisible) => !preVisible);
    }

    return (
        <>
            <NavBar />
            <main style={{ backgroundColor: "#498092e4" }}>
                <div className="container min-vh-100 d-flex justify-content-center align-items-center">
                    <form
                        action="" className="shadow-lg p-5  bg-content rounded mt-1" style={{ backgroundColor: "#BEE9E9" }}>


                        <h2 className="text-center mb-2">Create Your Account</h2>
                        <h5 className="text-center mb-2">Enter User Details </h5>
                        <div className="mb-1">
                            <label htmlFor="exampleInputEmail1 " className="form-label">Name</label>
                            <input type="text" name="name" className="form-control" required onChange={handledata} aria-describedby="emailHelp" autoComplete="username" />
                        </div>

                        <div className="mb-1">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                            <input type="text" name="email" autoComplete="" required onChange={handledata} className="form-control" />
                        </div>
                        <label htmlFor="exampleInputEmail1" className="form-label mb-1 "> Password</label>
                        <div className="password-input-container d-flex align-items-center justify-content-end">

                            <input 
                            type={PasswordVisible ? "text" : "password"}
                                name="password"
                                autoComplete="current-password"
                                onChange={handledata} required className="form-control position-relative" />

                            <img 
                            src={PasswordVisible ? Showpass : Hidepass}
                                className="password-toggle-icon me-3 position-relative rounded "
                                alt="Toggle Password Visibility"
                                onClick={togglePasswordVisible}
                                style={{ cursor: 'pointer', width: '35px', height: '35px' }} />
                        </div>


                        <div className="form-check d-flex justify-content-center mt-2">
                            <input className="form-check-input mt-3" type="checkbox" />
                            <label className="form-check-label mt-2 " htmlFor="flexCheckDefault">
                                <p>  I agree and accept the <a href=""> terms and condition</a></p>
                            </label>
                        </div>

                        <div className=" d-flex justify-content-center">
                            <button type="button" className="btn w-100 btn-primary" data-bs-toggle="button" aria-pressed="true" onClick={SaveData}>Create Account</button>

                        </div>
                        <p className="text-center mt-2 ">
                            <h4>Already have an account</h4>
                        </p>
                        <div className=" d-flex justify-content-center">
                            <button type="button" className="btn w-100 btn-primary" data-bs-toggle="button" aria-pressed="true" onClick={() => { Navigate('/Login') }} >Login</button>
                        </div>
                    </form>
                </div>
            </main>

        </>

    )
}
export default Registration;