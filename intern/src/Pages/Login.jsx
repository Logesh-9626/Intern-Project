import React from "react";
import axios from "axios";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";


const Login =()=>{

    const Navigate =useNavigate()
    
    const [JwtToken,setJwtToken] =useState(null)
   
    const [LoginCheck,SetLoginCheck]=useState({
        email:"",
        password:"",
    })

    const LoginURL ="http://localhost:8000/Login/Login"
   
   
 const SaveData=async()=>{

  console.log(LoginCheck)

        try {
        const response = await axios.post(LoginURL,LoginCheck)
        const data = response.data
        var Token=response.data.Token


        if (response.status === 404 && !data.success){
            alert('User Not Found')
            if(response.status === 401 && !data.success){
                alert("Plan Expired Upgrade Your Plan")
            } else if(response.status === 500 && !data.success){
                   alert("Invalid Password")
            }   
             }   
        else { 
          setJwtToken(localStorage.setItem("Jwt-Token",Token))
          window.dispatchEvent(new Event("Token-Update"))
          console.log(Token)
          alert('Login Successfully')
          Navigate('/AiPage')       
         
        }
    }
    catch (error) {
            console.error('Error during Login', error)
            alert("Invalid Password or Plan Expired ");
          } 
     }
     const Formdata=(e)=>{
        SetLoginCheck((prevData)=>{
            return({
                ...prevData,
                [e.target.name]:e.target.value
            })
           
        })}

 
  
    return(
        <>
        <NavBar/>
              <main style={{ backgroundColor: "#498092e4" }}>
        <div className="container min-vh-100 d-flex justify-content-center align-items-center">
            <form
                action=""
                className="shadow-lg p-5  bg-content rounded " style={{ backgroundColor: "#BEE9E9" }}>
             
                <h2 className="text-center mb-2">Login To Your Account</h2>
                <h6 className="text-center mb-2">Enter Your Email and Password</h6>


        
                <div className="mb-1">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-3"><h4>Email</h4></label>
                    <input type="text" name="email" className="form-control " aria-describedby="emailHelp"  autoComplete="username" required onChange={Formdata} />
                </div>

                <div className="mt-1">
                    <label htmlFor="exampleInputEmail1" className="form-label"><h4>Password</h4></label>
                    <input type="password" name="password"   autoComplete="current-password"  className="form-control" required onChange={Formdata} />
                </div>

                <button type="button" className=" btn w-100 btn-primary mt-3" onClick={SaveData}>Login</button>
                <h5 className="mt-3">Don't Have An Account</h5>
                <button type="button" className=" btn w-100 btn-primary " onClick={()=>{Navigate('/RegisterPage')}}>Create An Account</button>
                
            
          
           </form>

           </div>
           </main>
        </>

    )

}
export default Login;