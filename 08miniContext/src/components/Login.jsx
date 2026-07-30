import React, {useContext, useState} from "react";
import UserContext from "../Context/UserContext";

export function Login(){
    const [username,setusername] =useState('')
    const [password,setpassword] =useState('')

    const {setUser} = useContext(UserContext)
    const handlesubmit =(e)=>{
        e.preventDefault()

        setUser({username,password})
    }
    return(
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col items-center gap-4 bg-gray-800 p-6 rounded-lg shadow-lg"  >
                            <h2>login</h2>
            <input className="bg-white text-black" type="text"
            value={username}
            onChange={(e) =>setusername(e.target.value)}
            placeholder="username" />
            {" "}
             <input className="bg-white text-black" type="text" 
             value={password}
             onChange={(e)=>setpassword(e.target.value)}
             placeholder="password" />
             <button 
               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
             onClick={handlesubmit}>Submit</button>
            </div>

        </div>
    )
}