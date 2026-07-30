import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export function Github(){
    const data=useLoaderData()
    // const [data,setdata] =useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data =>{
    //         setdata(data)
    //     })
    // })
    return(
        <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl">Github Followers {data.followers}
        <img src={data.avatar_url} alt="git picture" width={300}/>
        </div>
    )
}

export const  GithubInfoLoader =async()=>{
   const response = await  fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}