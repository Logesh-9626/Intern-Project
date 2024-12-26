import React,{useEffect, useState} from 'react'
import './App.css'
import { Routes,Route, Navigate } from 'react-router-dom';
import Registration from './Pages/Registration'
import SubcriptionPage from './Pages/SubcriptionPage';
import Success from './Pages/Success';
import Login from './Pages/Login';
import AiPage from './Pages/AiPage';
import Mainpage from './Pages/Mainpage';
import ErrorPage from './Pages/ErrorPage'



function App() {

  const [isAuth,setisAth]=useState(true)
  
  useEffect(()=>{
    TokenCheck()
},[])

const TokenCheck=()=>{
  const token =(localStorage.getItem("Jwt-Token")) 

  try{
    if(!token){
      setisAth(false)
      console.log(isAuth)
    }
    else{
  
      setisAth(true)
      console.log()
    }
  }
  catch(e){
    console.log("error",e)
  }
  // finally{setisAth()}
   

  }
  window.addEventListener("Token-Update",TokenCheck)
  window.removeEventListener("Token-Update",TokenCheck)





  return (
  
  <>

<Routes>    

         {/* MainPage */}
 <Route path='/'element={<Mainpage/>}/>

        {/* Registration */}
<Route path='/RegisterPage'element={<Registration/>}/>

          {/* SubcriptionPage */}
<Route path='/SubcriptionPage'element={<SubcriptionPage/>}/>

           {/* Successpage */}
<Route path='/Success' element={<Success/>}></Route>

             {/* Aipage */}
<Route path='/AiPage' element={ isAuth ? <AiPage/> : <Navigate to='/Login'/>}></Route>

            {/* LoginPage */}
<Route path='/Login' element={<Login/>}></Route>

            {/* ErrorPage */}
 <Route path='/404'element={<ErrorPage/>}/>


</Routes>

    </>
  )
}

export default App;
